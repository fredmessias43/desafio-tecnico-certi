import { IsEmail, IsNotEmpty, IsUrl } from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  readonly name: string;
  
  @IsNotEmpty()
  @IsUrl()
  readonly image_url: string;
}
