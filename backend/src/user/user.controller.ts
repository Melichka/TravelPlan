import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Req,
  Param,
  Delete,
  NotFoundException,
  UsePipes,
  ValidationPipe,
  UseGuards,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from 'src/entities/User';
import { CreateUserDto } from 'src/dto/createUserDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Tag } from 'src/entities/Tag';
import { LoginDto } from 'src/dto/loginDto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getUserRepository().find();
  }


@ApiBearerAuth()
  @Get('currentUserId')
  @UseGuards(JwtAuthGuard)
  async getCurrentUserId(@Req() req): Promise<{ userId: number }> {
    console.log('User data from token:', req.user);

    if (req.user && req.user.email) {
      const user = await this.userService.findOne(req.user.email); // Замените это на ваш метод для поиска пользователя по электронной почте
      if (user) {
        const userId = user.id; // Предполагаем, что у пользователя есть поле id
        return { userId };
      } else {
        console.log('User not found for email:', req.user.email); // логируем ошибку
        throw new UnauthorizedException('User not found');
      }
    } else {
      console.log('Email not found in request user object'); // логируем ошибку
      throw new UnauthorizedException('Email not found in request user object');
    }
  }




  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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

  @Post('login') // Роут для входа
async login(@Body() loginDto: LoginDto) {
  const { email, password } = loginDto;

  // Находим пользователя по email
  const foundUser = await this.userService.findOne(email);
  if (!foundUser) {
    throw new NotFoundException('Пользователь не найден');
  }

  // Проверяем, совпадает ли введенный пароль с паролем пользователя
  const isPasswordValid = await this.userService.comparePasswords(
    password,
    foundUser.password,
  );
  if (!isPasswordValid) {
    throw new HttpException('Неверные учетные данные', HttpStatus.UNAUTHORIZED);
  }

  // Генерируем JWT токен
  const token = this.jwtService.sign({id:foundUser.id, email: foundUser.email });

  // Возвращаем токен пользователю
  return { token };
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

  @Post(':userId/favorites/:placeId')
  @UseGuards(JwtAuthGuard)
  async addToFavorites(
    @Param('userId') userId: number,
    @Param('placeId') placeId: number,
  ) {
    try {
      await this.userService.addToFavorites(userId, placeId);
      return {
        success: true,
        message: 'Place added to favorites successfully',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // @Post(':userId/tags/:tagId') // Роут для добавления тега пользователю
  // @UseGuards(JwtAuthGuard)
  // async addUserTag(
  //   @Param('userId') userId: number,
  //   @Param('tagId') tagId: number,
  // ) {
  //   try {
  //     await this.userService.addUserTag(userId, tagId);
  //     return {
  //       success: true,
  //       message: 'Tag added to user successfully',
  //     };
  //   } catch (error) {
  //     throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }
  @Post(':userId/tags')
  @UseGuards(JwtAuthGuard)
  async addUserTags(
    @Param('userId') userId: number,
    @Body() tagData: { userId: number; tagId: number },
  ) {
    console.log('Received userId:', userId);
    console.log('Received tagData:', tagData);

    try {
      await this.userService.addUserTagsById(userId, [tagData.tagId]);

      return {
        success: true,
        message: 'Tags added to user successfully',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get(':userId/tags')
  async getUserTags(@Param('userId') userId: number): Promise<string[]> {
    try {
      const tags = await this.userService.getUserTags(userId);
      if (!tags) {
        throw new Error("User tags not found"); // Или другое сообщение об ошибке по вашему усмотрению
      }
      return tags;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  // @Delete(':userId/tags/:tagId') // Роут для удаления тега у пользователя
  // @UseGuards(JwtAuthGuard)
  // async removeUserTag(
  //   @Param('userId') userId: number,
  //   @Param('tagId') tagId: number,
  // ) {
  //   try {
  //     await this.userService.removeUserTag(userId, tagId);
  //     return {
  //       success: true,
  //       message: 'Tag removed from user successfully',
  //     };
  //   } catch (error) {
  //     throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }

  // @Delete(':email')
  // async delete(@Param('email') email: string): Promise<any> {
  //   const user = await this.userService.findOne(email);
  //   if (!user) {
  //     throw new NotFoundException('User does not exist!');
  //   }
  //   return this.userService.delete(email);
  // }
}
