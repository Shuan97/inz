import { DoesUserExist } from './../../core/guards/doesUserExist.guard';
import {
  Body,
  Controller,
  HttpCode,
  Logger,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { LocalAuthGuard } from 'src/core/guards/localAuth.guard';
import { Public } from 'src/core/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  private logger: Logger = new Logger('AuthController');

  /**
   * @alias Public() decoratod defines if path is available for unauthorized users
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
  async login(@Request() req: any, @Response() res: any) {
    const { user } = req;
    const cookie = this.authService.getCookieWithJwtToken(user.UUID);
    res.setHeader('Set-Cookie', cookie);
    this.logger.log(cookie);
    this.logger.log(user.UUID);
    return res.send(user);
    // return await this.authService.login(req.user);
  }
}
