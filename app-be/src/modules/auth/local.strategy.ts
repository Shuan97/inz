import { User } from './../users/user.entity';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    /**
     * Options object can be passed to @method super()
     * @param usernameField
     * @param passwordField
     * to change expected properties called username and password
     * in the request body
     */
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      // do not specify either email or password to prevent the attackers
      // from obtaining the list of registered emails
      throw new UnauthorizedException('Invalid user credentials');
    }
    return user;
  }
}
