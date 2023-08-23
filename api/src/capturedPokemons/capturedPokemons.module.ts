import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CapturedPokemon, CapturedPokemonSchema } from './schemas/capturedPokemon.schema';
import { CapturedPokemonCreatedListener } from './listeners/capturedPokemon-created.listener';
import { EventsModule } from '../events/events.module';
import { EventsGateway } from 'src/events/events.gateway';
import { CapturedPokemonsController } from './capturedPokemons.controller';
import { CapturedPokemonsService } from './capturedPokemons.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CapturedPokemon.name, schema: CapturedPokemonSchema }]),
    EventsModule
  ],
  controllers: [CapturedPokemonsController],
  providers: [CapturedPokemonsService, CapturedPokemonCreatedListener, EventsGateway],
})
export class CapturedPokemonsModule {}
