import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInUserDto } from './types';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: number, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(payload: SignInUserDto) {
    const user = await this.usersService.findOneByEmail(payload.email);
    if (!user) {
      throw new NotFoundException();
    }
    const passwordMatches = await argon2.verify(
      payload.password,
      user.password,
    );
    if (!passwordMatches) {
      throw new BadRequestException();
    }
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    return tokens;
  }

  async getTokens(id: number, email: string) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        { sub: id, email },
        { secret: '123', expiresIn: '7d' },
      ),
      this.jwtService.signAsync(
        { sub: id, email },
        { secret: '123', expiresIn: '30d' },
      ),
    ]);
    return { access_token, refresh_token };
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    const hashFromRefreshToken = await argon2.hash(refreshToken);
    await this.usersService.update(id, {
      refreshToken: hashFromRefreshToken,
    });
  }

  async signUp(p: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signOut(user: any) {
    const payload = { username: user.username, sub: user.userId };

    await this.usersService.update(id, {
      refreshToken: null,
    });
    return {
      access_token: this.jwtService.(payload),
    };
  }
}
