import { Injectable } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(({
  path: "http://localhost:8080",
  cors: {
    origin: ['*'],
    credentials: true,
  },
  pingInterval: 10000,
  pingTimeout: 15000,
}))
export class EventsGateway {
  @WebSocketServer()
  server: Server;
}