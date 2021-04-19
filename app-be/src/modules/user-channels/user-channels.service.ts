import { UserChannelDto } from './user-channel.dto';
import { UserChannel } from './user-channel.entity';
import { USER_CHANNEL_REPOSITORY } from 'core/constants';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserChannelsService {
  constructor(
    @Inject(USER_CHANNEL_REPOSITORY)
    private readonly userChannelsRepository: typeof UserChannel,
  ) {}

  async create(userChannel: UserChannelDto): Promise<UserChannel> {
    return await this.userChannelsRepository.create<UserChannel>(userChannel);
  }

  async assignUserToChannel(userChannel: UserChannelDto): Promise<UserChannel> {
    return await this.userChannelsRepository.create<UserChannel>(userChannel);
  }
}
