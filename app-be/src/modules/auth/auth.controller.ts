import { DoesUserExist } from './../../core/guards/doesUserExist.guard';
import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Logger,
  Post,
  Req,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { LocalAuthGuard } from 'core/guards/localAuth.guard';
import { Public } from 'core/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  private logger: Logger = new Logger('AuthController');

  /**
   * @alias Public() decorator defines if path is available for unauthorized users
   */
  @Public()
  @UseGuards(DoesUserExist)
  @Post('register')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }

  @HttpCode(200)
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: any) {
    const { user } = request;
    const token = this.authService.getJwtToken(user.UUID);
    return token;
  }

  @Get('profile')
  async getProfile(@Request() req) {
    const { user } = req;
    if (!user) {
      this.logger.error('[req.user] does not exist in /profile');
      throw new UnauthorizedException();
    }
    const cookie = this.authService.getCookieWithJwtToken(user.UUID);
    req.res.setHeader('Set-Cookie', [cookie]);
    const profile = await this.authService.getUserFromResponse(req.user.UUID);
    return profile;
  }
}
