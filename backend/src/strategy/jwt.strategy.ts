import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Проверяем срок действия токена
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    // Проверяем наличие обязательных полей в полезной нагрузке токена
    if (!payload || !payload.id || !payload.email) {
      throw new UnauthorizedException('Invalid token payload');
    }

    // Проверяем срок действия токена
    const currentTime = Date.now() / 1000; // текущее время в секундах
    if (payload.exp && payload.exp < currentTime) {
      throw new UnauthorizedException('Token has expired');
    }

    // Возвращаем пользователя
    return { id: payload.id, email: payload.email };
  }
}
