import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';
import { PokemonCreatedListener } from './listeners/pokemon-created.listener';
import { EventsModule } from '../events/events.module';
import { EventsGateway } from 'src/events/events.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
    EventsModule
  ],
  controllers: [PokemonsController],
  providers: [PokemonsService, PokemonCreatedListener, EventsGateway],
})
export class PokemonsModule {}
