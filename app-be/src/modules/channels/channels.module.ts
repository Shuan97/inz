import { Channel } from './channel.entity';
import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { CHANNEL_REPOSITORY } from 'src/core/constants';

@Module({
  providers: [
    ChannelsService,
    {
      provide: CHANNEL_REPOSITORY,
      useValue: Channel,
    },
  ],
  controllers: [ChannelsController],
})
export class ChannelsModule {}