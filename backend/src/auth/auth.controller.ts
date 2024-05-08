import {
  Controller,
  Post,
  UseGuards,
  Request,
  // Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
// import { CreateUserDto } from 'src/dto/createUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }

  // @Post('sign-up')
  // async signUp(@Body() payload: CreateUserDto) {
  //   return this.authService.signUp(payload);
  // }

  @Get('sign-out')
  async signOut(@Request() request) {
    return this.authService.signOut(request.user);
  }
}
