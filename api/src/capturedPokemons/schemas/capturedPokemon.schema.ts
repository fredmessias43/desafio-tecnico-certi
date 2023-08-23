
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CapturedPokemonDocument = HydratedDocument<CapturedPokemon>;

@Schema()
export class CapturedPokemon {
  @Prop()
  name: string;

  @Prop()
  image_url: string;
}

export const CapturedPokemonSchema = SchemaFactory.createForClass(CapturedPokemon);
