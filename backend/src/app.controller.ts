import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    if (!req.user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return req.user;
  }
}
