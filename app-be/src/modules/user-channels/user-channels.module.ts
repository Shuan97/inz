import { UserChannel } from './user-channel.entity';
import { Module } from '@nestjs/common';
import { UserChannelsService } from './user-channels.service';
import { UserChannelsController } from './user-channels.controller';
import { USER_CHANNEL_REPOSITORY } from 'core/constants';

@Module({
  exports: [UserChannelsModule, UserChannelsService],
  providers: [
    UserChannelsService,
    {
      provide: USER_CHANNEL_REPOSITORY,
      useValue: UserChannel,
    },
  ],
  controllers: [UserChannelsController],
})
export class UserChannelsModule {}
