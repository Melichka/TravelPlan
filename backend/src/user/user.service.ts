import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { User } from 'src/entities/User';
import { CreateUserDto } from 'src/dto/createUserDto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { CreateAdministratorDto } from 'src/dto/createAdministratorDto';
import { Place } from 'src/entities/Place';
import { Tag } from 'src/entities/Tag';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,


    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,

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

  async findUserById(userId: number) {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async addUserTagsById(userId: number, tagIds: number[]) {
    try {
        // Проверяем, что пользователь существует
        const user = await this.findUserById(userId);
        if (!user) {
            console.log('User not found:', userId); // Отладочное сообщение
            throw new NotFoundException('User not found');
        }

        console.log('Adding tags to user:', user); // Отладочное сообщение

        // Сохраняем связи тегов с пользователем
        await Promise.all(tagIds.map(async (tagId) => {
            console.log('Adding tag to user:', tagId); // Отладочное сообщение
            await this.addUserTag(userId, tagId);
        }));
    } catch (error) {
        console.error('Error in addUserTagsById:', error); // Отладочное сообщение
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

async addUserTag(userId: number, tagId: number) {
    try {
        console.log('Adding tag to user:', tagId); // Отладочное сообщение

        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['tags'] });
        if (!user) {
            console.log('User not found:', userId); // Отладочное сообщение
            throw new Error('User not found');
        }

        console.log('User found:', user); // Отладочное сообщение

        const tag = await this.tagRepository.findOne({
            where: { id: tagId },
        });
        if (!tag) {
            console.log('Tag not found:', tagId); // Отладочное сообщение
            throw new Error('Tag not found');
        }

        console.log('Tag found:', tag); // Отладочное сообщение

        if (!user.tags.find(t => t.id === tagId)) {
            console.log('Adding tag to user:', tagId); // Отладочное сообщение
            user.tags.push(tag);
            await this.userRepository.save(user);
        }
    } catch (error) {
        console.error('Error in addUserTag:', error); // Отладочное сообщение
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
      isAdministrator: false,
    });
    const token = this.jwtService.sign({
      email: createUserDto.email,
    });

    return { user, token };
  }

  async createUserAdmin(userData: CreateAdministratorDto): Promise<User> {
    const { name, surname, email, password } = userData;
    const user = new User();
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.password = password;
    user.isAdministrator = true; // Устанавливаем пользователя администратором
    return await this.userRepository.save(user);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async comparePasswords(
    enteredPassword: string,
    storedPasswordHash: string,
  ): Promise<boolean> {
    return await argon2.verify(storedPasswordHash, enteredPassword);
  }

  async addToFavorites(userId: number, placeId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const place = await this.placeRepository.findOne({
      where: { id: placeId },
    });
    if (!place) {
      throw new Error('Place not found');
    }

    user.places.push(place);
    await this.userRepository.save(user);
  }


  async removeUserTag(userId: number, tagId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['tags'] });
    if (!user) {
      throw new Error('User not found');
    }

    const tagIndex = user.tags.findIndex(t => t.id === tagId);
    if (tagIndex === -1) {
      throw new Error('User does not have this tag');
    }

    user.tags.splice(tagIndex, 1);
    await this.userRepository.save(user);
  }

  async getCurrentUser(userId: number): Promise<User> {
    try {
      const user = await this.findUserById(userId);
      return user;
    } catch (error) {
      console.error('Error while fetching current user:', error);
      return undefined;
    }
  }


  async getUserTags(userId: number): Promise<string[]> {
    // Находим пользователя по его ID в базе данных
    const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['tags'] });

    if (!user) {
      throw new Error('User not found');
    }

    // Получаем теги, связанные с пользователем
    const tags = user.tags;

    // Инициализируем массив для хранения имен тегов
    const tagNames: string[] = [];

    // Перебираем теги и добавляем их имена в массив
    for (const tag of tags) {
      tagNames.push(tag.name);
    }

    return tagNames;
  }


}
