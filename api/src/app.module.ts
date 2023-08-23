import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonsModule } from './pokemons/pokemons.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { databaseConstants } from './constants/database';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot(databaseConstants.url), 
    PokemonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
