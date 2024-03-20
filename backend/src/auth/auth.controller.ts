import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto, SignInUserDto } from './types';
import { request } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/sign-in')
  async signIn(@Body() payload: SignInUserDto) {
    return this.authService.signIn(payload);
  }

  @Post('auth/sign-up')
  async signUp(@Body() payload: CreateUserDto) {
    return this.authService.signUp(req.user);
  }

  @Get('auth/sign-out')
  async signOut(@Request() request) {
    return this.authService.signOut(req.user);
  }
}
