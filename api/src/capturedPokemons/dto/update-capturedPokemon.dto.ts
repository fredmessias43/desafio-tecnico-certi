import { PartialType } from '@nestjs/mapped-types';
import { CreateCapturedPokemonDto } from './create-capturedPokemon.dto';

export class UpdateCapturedPokemonDto extends PartialType(CreateCapturedPokemonDto) {}
