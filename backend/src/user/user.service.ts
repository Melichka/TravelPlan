import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User';
import { CreateUserDto } from 'src/dto/createUserDto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  getUserRepository(): Repository<User> {
    return this.userRepository;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('This email already exists');
    }

    if (createUserDto.password !== createUserDto.checkpassword) {
      throw new BadRequestException('Passwords do not match');
    }

    const hashedPassword = await argon2.hash(createUserDto.password);

    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: hashedPassword,
    });
    const token = this.jwtService.sign({
      email: createUserDto.email,
    });

    return { user, token };
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
