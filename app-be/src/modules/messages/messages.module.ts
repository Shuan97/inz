import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { messagesProviders } from './messages.providers';
import { MessagesGateway } from './messages.gateway';
import { Message } from './message.entity';
import { MESSAGE_REPOSITORY } from 'core/constants';

@Module({
  imports: [AuthModule],
  providers: [...messagesProviders, MessagesService, MessagesGateway],
  controllers: [MessagesController],
})
export class MessagesModule {}
