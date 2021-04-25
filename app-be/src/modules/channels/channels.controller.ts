import { AuthGuard } from '@nestjs/passport';
import { Channel } from './channel.entity';
import { ChannelDto } from './channel.dto';
import { ChannelsService } from './channels.service';
import { Controller, Post, Body, Request, Get, Param } from '@nestjs/common';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  async findAll() {
    return await this.channelsService.getAll();
  }

  @Get(':UUID/messages')
  async findAllWithMessages(@Param('UUID') UUID: any) {
    return await this.channelsService.findMessagesByChannel(UUID);
  }

  @Post('/new')
  async create(@Body() channel: ChannelDto, @Request() req) {
    return await this.channelsService.create(channel, req.user.UUID);
  }
}
