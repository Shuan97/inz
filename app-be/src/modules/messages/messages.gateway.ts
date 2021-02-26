import { AuthService } from './../auth/auth.service';
import { MessagesService } from './messages.service';
import { Message } from 'src/modules/messages/message.entity';
import { Logger, Request } from '@nestjs/common';
import {
  ConnectedSocket,
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
  constructor(
    private readonly authService: AuthService,
    private readonly messagesService: MessagesService,
  ) {}

  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('MessagesGateway');
  private messageLogger: Logger = new Logger('Message');

  async handleConnection(socket: Socket, ...args: any[]) {
    // this.logger.log(socket.handshake.headers);
    const user = await this.authService.getUserFromSocket(socket);
    this.logger.log(`Client connected: ${socket.id}, [User]: ${user?.email}`);
  }

  afterInit(server: Server) {
    this.logger.log('\x1b[31mServer initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`\x1b[31mClient disconnected: ${client.id}\x1b[0m`);
  }

  @SubscribeMessage('messageFromChannel')
  async handleMessage(
    @MessageBody() content: string,
    @ConnectedSocket() socket: Socket,
  ) {
    const user = await this.authService.getUserFromSocket(socket);
    const message = await this.messagesService.create(
      { body: content, channelUUID: 'd74e70a5-7015-4a1d-b0e6-eb0cb4279b11' },
      user.UUID,
    );
    const messageWithUser = await this.messagesService.findOne(message.id);
    this.messageLogger.log(messageWithUser);
    this.messageLogger.log(user.UUID);
    // this.messageLogger.log(messageWithUser);
    this.server.emit('messageToChannel', messageWithUser);
  }
}
