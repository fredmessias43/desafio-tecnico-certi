
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon {
  @Prop()
  name: string;

  @Prop()
  image_url: string;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
