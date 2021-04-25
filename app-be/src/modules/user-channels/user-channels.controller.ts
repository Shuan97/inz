import { UserChannelDto } from './user-channel.dto';
import { UserChannelsService } from './user-channels.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserChannel } from './user-channel.entity';

@Controller('channels')
export class UserChannelsController {
  constructor(private readonly userChannelsService: UserChannelsService) {}

  @Post('/add-user')
  async assignUserToChannel(
    @Body() userChannel: UserChannelDto,
  ): Promise<UserChannel> {
    return await this.userChannelsService.assignUserToChannel(userChannel);
  }
}
