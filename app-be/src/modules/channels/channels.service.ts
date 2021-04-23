import { ChannelCreated } from './channelCreated.dto';
import { User } from './../users/user.entity';
import { ChannelDto } from './channel.dto';
import { Channel } from './channel.entity';
import {
  CHANNEL_REPOSITORY,
  MESSAGE_REPOSITORY,
} from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { Message } from 'modules/messages/message.entity';

@Injectable()
export class ChannelsService {
  constructor(
    @Inject(CHANNEL_REPOSITORY)
    private readonly channelsRepository: typeof Channel,
    @Inject(MESSAGE_REPOSITORY)
    private readonly messagesRepository: typeof Message,
  ) {}

  async getAll(): Promise<Channel[]> {
    return await this.channelsRepository.findAll<Channel>();
  }

  async getAllWithUsers(): Promise<Channel[]> {
    return await this.channelsRepository.findAll<Channel>({
      include: [User],
    });
  }

  async findMessagesByChannel(ChannelUUID: string): Promise<Message[]> {
    return await this.messagesRepository.findAll<Message>({
      where: { channelUUID: ChannelUUID },
      include: [
        {
          model: User,
          // attributes: { include: ['UUID', 'name', 'email', 'nickname'] },
          attributes: ['UUID', 'name', 'email', 'nickname'],
        },
      ],
    });
  }

  async create(channel: ChannelDto, userUUID: string): Promise<Channel> {
    const createdBy = userUUID;
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
