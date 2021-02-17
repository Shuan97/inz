import { UserChannelsModule } from './../user-channels/user-channels.module';
import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
  imports: [UserChannelsModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
