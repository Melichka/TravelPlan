import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  // Delete,
  NotFoundException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from 'src/entities/User';
import { CreateUserDto } from 'src/dto/createUserDto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getUserRepository().find();
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    return this.userService.update(id, user);
  }

  // @Delete(':email')
  // async delete(@Param('email') email: string): Promise<any> {
  //   const user = await this.userService.findOne(email);
  //   if (!user) {
  //     throw new NotFoundException('User does not exist!');
  //   }
  //   return this.userService.delete(email);
  // }
}
