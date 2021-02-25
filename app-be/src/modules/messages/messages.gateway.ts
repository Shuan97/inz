import { AuthService } from './../auth/auth.service';
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
  constructor(private readonly authService: AuthService) {}

  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('MessagesGateway');
  private messageLogger: Logger = new Logger('Message');

  async handleConnection(socket: Socket, ...args: any[]) {
    // await this.authService.getUserFromSocket(socket);
    this.logger.log(`Client connected: ${socket.id}`);
  }

  afterInit(server: Server) {
    this.logger.log('\x1b[31mServer initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`\x1b[31mClient disconnected: ${client.id}\x1b[0m`);
  }

  @SubscribeMessage('messageFromChannel')
  handleMessage(@MessageBody() message: Message, @Request() req) {
    this.messageLogger.log(message);
    this.server.emit('messageToChannel', message);
  }
}
