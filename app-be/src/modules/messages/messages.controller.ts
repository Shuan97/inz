import { MessagesGateway } from './messages.gateway';
import { MessageDto } from './message.dto';
import { AuthGuard } from '@nestjs/passport';
import { Message } from 'modules/messages/message.entity';
import { MessagesService } from './messages.service';
import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
  Post,
  Put,
  Body,
  Request,
  Delete,
  Logger,
} from '@nestjs/common';
import { Public } from 'core/decorators/public.decorator';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly messagesGateway: MessagesGateway,
  ) {}

  private messageLogger: Logger = new Logger('MessageController');

  // @Public()
  @Get()
  async findAll() {
    return await this.messagesService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<Message> {
  //   // find the message with this id
  //   const message = await this.messagesService.findOne(id);

  //   // if the message doesn't exit in the db, throw a 404 error
  //   if (!message) {
  //     throw new NotFoundException('"This message doesn\'t exist"');
  //   }

  //   // if message exist, return the message
  //   return message;
  // }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() message: MessageDto, @Request() req) {
    // create a new message and return the newly created message
    this.messageLogger.log(`User: ${req.user.UUID}`);
    this.messageLogger.log(`Authorization: ${req.headers.authorization}`);
    return await this.messagesService.create(message, req.user.UUID);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() message: MessageDto,
  //   @Request() req,
  // ): Promise<Message> {
  //   // get the number of row affected and the updated message
  //   const {
  //     numberOfAffectedRows,
  //     updatedMessage,
  //   } = await this.messagesService.update(id, message, req.user.id);

  //   // if the number of row affected is zero,
  //   // it means the message doesn't exist in our db
  //   if (numberOfAffectedRows === 0) {
  //     throw new NotFoundException('"This message doesn\'t exist"');
  //   }

  //   // return the updated message
  //   return updatedMessage;
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @Delete(':id')
  // async remove(@Param('id') id: number, @Request() req) {
  //   // delete the message with this id
  //   const deleted = await this.messagesService.delete(id, req.user.id);

  //   // if the number of row affected is zero,
  //   // then the message doesn't exist in our db
  //   if (deleted === 0) {
  //     throw new NotFoundException('"This message doesn\'t exist"');
  //   }

  //   // return success message
  //   return 'Successfully deleted';
  // }
}
