import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { databaseConstants } from './constants/database';
import { CapturedPokemonsModule } from './capturedPokemons/capturedPokemons.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot(databaseConstants.url), 
    CapturedPokemonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
