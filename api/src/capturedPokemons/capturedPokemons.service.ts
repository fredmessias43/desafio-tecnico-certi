import { Injectable } from '@nestjs/common';
import { CreateCapturedPokemonDto } from './dto/create-capturedPokemon.dto';
import { UpdateCapturedPokemonDto } from './dto/update-capturedPokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CapturedPokemon } from './schemas/capturedPokemon.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CapturedPokemonCreatedEvent } from './events/capturedPokemon-created.event';

@Injectable()
export class CapturedPokemonsService {
  constructor(@InjectModel(CapturedPokemon.name) private capturedPokemonModel: Model<CapturedPokemon>, private eventEmitter: EventEmitter2) { }

  async create(createCapturedPokemonDto: CreateCapturedPokemonDto): Promise<CapturedPokemon> {
    const createdCapturedPokemon = new this.capturedPokemonModel(createCapturedPokemonDto);
    const result = createdCapturedPokemon.save();
    
    const capturedPokemonCreatedEvent = new CapturedPokemonCreatedEvent();
    capturedPokemonCreatedEvent.name = createdCapturedPokemon.name;
    capturedPokemonCreatedEvent.image_url = createdCapturedPokemon.image_url;
    this.eventEmitter.emit('captured_pokemon.created', capturedPokemonCreatedEvent);

    return result;
  }

  async findAll(): Promise<CapturedPokemon[]> {
    return this.capturedPokemonModel.find().exec();
  }

  findOne(id: string) {
    return this.capturedPokemonModel.findOne({ "_id": id }).exec();
  }

  update(id: string, updateCapturedPokemonDto: UpdateCapturedPokemonDto) {
    return this.capturedPokemonModel.updateOne({ "_id": id }, { $set: updateCapturedPokemonDto }).exec();
  }

  remove(id: string) {
    return this.capturedPokemonModel.deleteOne({ "_id": id }).exec();
  }
}
