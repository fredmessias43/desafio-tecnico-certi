import { IsEmail, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCapturedPokemonDto {
  @IsNotEmpty()
  readonly name: string;
  
  @IsNotEmpty()
  @IsUrl()
  readonly image_url: string;
}
