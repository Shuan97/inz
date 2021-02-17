import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { messagesProviders } from './messages.providers';

@Module({
  providers: [MessagesService, ...messagesProviders],
  controllers: [MessagesController],
})
export class MessagesModule {}
