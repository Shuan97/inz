import { User } from './../users/user.entity';
import { ChannelDto } from './channel.dto';
import { Channel } from './channel.entity';
import { CHANNEL_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ChannelsService {
  constructor(
    @Inject(CHANNEL_REPOSITORY)
    private readonly channelsRepository: typeof Channel,
  ) {}

  async create(channel: ChannelDto, userUUID): Promise<Channel> {
    return await this.channelsRepository.create<Channel>({
      ...channel,
      userUUID,
    });
  }

  async findAll(): Promise<Channel[]> {
    return await this.channelsRepository.findAll<Channel>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }
}
