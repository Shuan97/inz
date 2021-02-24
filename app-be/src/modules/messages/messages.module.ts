import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { messagesProviders } from './messages.providers';
import { MessagesGateway } from './messages.gateway';

@Module({
  providers: [MessagesService, ...messagesProviders, MessagesGateway],
  controllers: [MessagesController],
})
export class MessagesModule {}
