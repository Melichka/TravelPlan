import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaceDto } from './createPlaceDto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {}
