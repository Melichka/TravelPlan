import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, SignInUserDto } from '../types/types';
import { JwtStrategy } from './jwt.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtStrategy)
  @Post('sign-in')
  async signIn(@Body() payload: SignInUserDto) {
    return this.authService.signIn(payload);
  }

  @Post('sign-up')
  async signUp(@Body() payload: CreateUserDto) {
    return this.authService.signUp(payload);
  }

  @Get('sign-out')
  async signOut(@Request() request) {
    return this.authService.signOut(request.user);
  }
}
