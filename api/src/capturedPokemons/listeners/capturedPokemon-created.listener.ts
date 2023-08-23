import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CapturedPokemonCreatedEvent } from '../events/capturedPokemon-created.event';
import { WebSocketGateway } from '@nestjs/websockets';
import { EventsGateway } from 'src/events/events.gateway';

@Injectable()
export class CapturedPokemonCreatedListener {
  constructor(private readonly gateway: EventsGateway) { }

  @OnEvent('captured_pokemon.created')
  handleCapturedPokemonCreatedEvent(event: CapturedPokemonCreatedEvent) {
    this.gateway.server.emit("captured_pokemon.created", event);
  }
}