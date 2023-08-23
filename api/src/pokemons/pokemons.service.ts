import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './schemas/pokemon.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PokemonCreatedEvent } from './events/pokemon-created.event';

@Injectable()
export class PokemonsService {
  constructor(@InjectModel(Pokemon.name) private pokemonModel: Model<Pokemon>, private eventEmitter: EventEmitter2) { }

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const createdPokemon = new this.pokemonModel(createPokemonDto);
    const result = createdPokemon.save();
    
    const pokemonCreatedEvent = new PokemonCreatedEvent();
    pokemonCreatedEvent.name = createdPokemon.name;
    pokemonCreatedEvent.image_url = createdPokemon.image_url;
    this.eventEmitter.emit('pokemon.created', pokemonCreatedEvent);

    return result;
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonModel.find().exec();
  }

  findOne(id: string) {
    return this.pokemonModel.findOne({ "_id": id }).exec();
  }

  update(id: string, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonModel.updateOne({ "_id": id }, { $set: updatePokemonDto }).exec();
  }

  remove(id: string) {
    return this.pokemonModel.deleteOne({ "_id": id }).exec();
  }
}
