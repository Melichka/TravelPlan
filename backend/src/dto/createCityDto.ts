import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateCityDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  description: string;

  @IsNotEmpty({ message: 'Image URL is required' })
  @IsString({ message: 'Image URL must be a string' })
  imageUrl: string;

  @IsNotEmpty({ message: 'Favourite status is required' })
  @IsBoolean({ message: 'Favourite status must be a boolean value' })
  favourite: boolean;
}
