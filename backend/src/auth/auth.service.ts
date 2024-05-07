import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto, SignInUserDto } from '../types/types';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const passwordIsMatch = await argon2.verify(user.password, password);
    if (!passwordIsMatch) {
      throw new UnauthorizedException('Invalid password');
    }
    return user;
  }

  async signIn(payload: SignInUserDto) {
    const user = await this.usersService.findOneByEmail(payload.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const passwordMatches = await argon2.verify(
      payload.password,
      user.password,
    );
    if (!passwordMatches) {
      throw new BadRequestException('Invalid password');
    }
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    return tokens;
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
    await this.usersService.update(id, { refreshToken: hashFromRefreshToken });
  }

  async signUp(newUser: CreateUserDto) {
    const existingUser = await this.usersService.findOneByEmail(newUser.email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }
    const user = await this.usersService.create(newUser);

    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);

    return { access_token: accessToken };
  }

  async signOut(user: any) {
    const existingUser = await this.usersService.findOneByEmail(user.email);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    await this.usersService.update(user.id, { refreshToken: null });

    return { message: 'Signed out successfully' };
  }
}
