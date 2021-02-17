import { Module } from '@nestjs/common';
import { UserChannelsService } from './user-channels.service';
import { UserChannelsController } from './user-channels.controller';

@Module({
  exports: [UserChannelsModule],
  providers: [UserChannelsService],
  controllers: [UserChannelsController],
})
export class UserChannelsModule {}
