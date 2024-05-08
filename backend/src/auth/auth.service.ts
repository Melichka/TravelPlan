import {
  // BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IUser } from '../types/types';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
// import { CreateUserDto } from 'src/dto/createUserDto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const passwordIsMatch = await argon2.verify(user.password, password);
    if (!passwordIsMatch) {
      throw new UnauthorizedException('Invalid password');
    }
    return user;
  }

  async signIn(user: IUser) {
    const { id, email } = user;
    return {
      id,
      email,
      token: this.jwtService.sign({
        id: user.id,
        email: user.email,
      }),
    };
  }

  async getTokens(id: number, email: string) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync({ sub: id, email }, { expiresIn: '7d' }),
      this.jwtService.signAsync({ sub: id, email }, { expiresIn: '30d' }),
    ]);
    return { access_token, refresh_token };
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    const hashFromRefreshToken = await argon2.hash(refreshToken);
    await this.userService.update(id, { refreshToken: hashFromRefreshToken });
  }

  // async signUp(newUser: CreateUserDto) {
  //   const existingUser = await this.userService.findOne(newUser.email);
  //   if (existingUser) {
  //     throw new BadRequestException('User with this email already exists');
  //   }
  //   const user = await this.userService.create(newUser);

  //   const payload = { sub: user.id, email: user.email };
  //   const accessToken = await this.jwtService.signAsync(payload);

  //   return { access_token: accessToken };
  // }

  async signOut(user: any) {
    const existingUser = await this.userService.findOne(user.email);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    await this.userService.update(user.id, { refreshToken: null });

    return { message: 'Signed out successfully' };
  }
}
