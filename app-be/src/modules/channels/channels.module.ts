import { Module } from '@nestjs/common';
import { CHANNEL_REPOSITORY } from 'core/constants';
import { MessagesModule } from 'modules/messages/messages.module';
import { messagesProviders } from 'modules/messages/messages.providers';
import { MessagesService } from 'modules/messages/messages.service';
import { UserChannelsModule } from './../user-channels/user-channels.module';
import { Channel } from './channel.entity';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';

@Module({
  imports: [UserChannelsModule, MessagesModule],
  exports: [ChannelsModule],
  providers: [
    ChannelsService,
    {
      provide: CHANNEL_REPOSITORY,
      useValue: Channel,
    },
    MessagesService,
    ...messagesProviders,
  ],
  controllers: [ChannelsController],
})
export class ChannelsModule {}
