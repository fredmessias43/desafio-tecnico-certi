import { Injectable } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { eventsConstants } from 'src/constants/events';
import { Server } from 'ws';

@WebSocketGateway(eventsConstants.port, {
  cors: true,
  transports: ['websocket', 'polling'],
  pingInterval: 10000,
  pingTimeout: 15000,
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;
}