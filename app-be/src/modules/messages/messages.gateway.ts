import { MessagesService } from './messages.service';
import { Message } from 'src/modules/messages/message.entity';
import { Logger, Request } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(4001)
export class MessagesGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('MessagesGateway');

  @SubscribeMessage('messageFromChannel')
  handleMessage(@MessageBody() message: Message, @Request() req) {
    console.log(message);
    this.server.emit('messageToChannel', message);
  }

  afterInit(server: Server) {
    this.logger.log('init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`\x1b[31mClient disconnected: ${client.id}\x1b[0m`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
