import { ChannelCreated } from './channelCreated.dto';
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

  async getAll(): Promise<Channel[]> {
    return await this.channelsRepository.findAll<Channel>();
  }

  async getAllWithUsers(): Promise<Channel[]> {
    return await this.channelsRepository.findAll<Channel>({
      include: [User],
    });
  }

  async create(channel: ChannelDto, userUUID): Promise<Channel> {
    const createdBy = userUUID;
    console.log(createdBy);
    const newChannel = await this.channelsRepository.create<Channel>({
      ...channel,
      userUUID,
      createdBy,
    });
    // const newChannelPlain: Channel = <Channel>newChannel.get({ plain: true });
    // const channelCreated: ChannelCreated = { UUID: newChannelPlain.UUID };

    // return await this.channelsRepository.create<Channel>({
    //   ...channel,
    //   userUUID,
    // });
    return newChannel;
  }
}
