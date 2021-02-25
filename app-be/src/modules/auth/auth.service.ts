import { ITokenPayload } from './interfaces/tokenPayload.intefrace';
import { Socket } from 'socket.io';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { parse } from 'cookie';
import { ConfigService } from '@nestjs/config';
import { WsException } from '@nestjs/websockets';
import { assert } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private logger: Logger = new Logger('AuthService');

  async validateUser(email: string, plainTextPassword: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      this.logger.error('Invalid user email');
      throw new UnauthorizedException('Invalid user credentials');
    }

    // find if user password match
    const match = await this.comparePassword(plainTextPassword, user.password);
    if (!match) {
      this.logger.error('Invalid user password');
      throw new UnauthorizedException('Invalid user credentials');
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user['dataValues'];
    return result;
  }
  /**
   * @function login is used to login the user.
   * This takes the user information,
   * generates a token with it, and then
   * @returns the token and user object.
   */
  public async login(user) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  /**
   * @function create is used to create a new user.
   * This takes the user information,
   * hash the user password, saves the user to the DB,
   * removes the password from the newly returned user,
   * generates a token with the user object,
   * and then returns the token and user object.
   */
  public async create(user) {
    // hash the password
    const hashedPassword = await this.hashPassword(user.password);

    // create the user
    const newUser = await this.userService.create({
      ...user,
      password: hashedPassword,
    });

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = newUser['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    return { user: result, token };
  }

  /**
   * @function generateToken generates a token and then returns it.
   */
  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  /**
   * @function hashPassword hashes the user password
   * and returns the hashed password.
   */
  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, hashedPasswrod) {
    const match = await bcrypt.compare(enteredPassword, hashedPasswrod);
    return match;
  }

  private async getUserFromAuthenticationToken(token: string) {
    if (!token) {
      this.logger.error('JWT token is undefined');
      return null;
    }
    const payload: ITokenPayload = this.jwtService.verify(token, {
      secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
    });
    if (payload.UUID) {
      return this.userService.findOneByUUID(payload.UUID);
    }
    this.logger.error('JWT token error');
    return null;
  }

  public async getUserFromSocket(socket: Socket) {
    const cookie = socket.handshake.headers.cookie;
    const { Authentication: authenticationToken } = parse(cookie);
    const user = await this.getUserFromAuthenticationToken(authenticationToken);

    if (!user) {
      this.logger.error('Invalid user credentials');
      return null;
      throw new UnauthorizedException('Invalid user credentials');
    }
    return user;
  }

  public getCookieWithJwtToken(UUID: string) {
    const payload: ITokenPayload = { UUID };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME',
    )}`;
  }
}
