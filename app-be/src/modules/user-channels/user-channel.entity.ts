import { User } from './../users/user.entity';
import { Channel } from './../channels/channel.entity';
import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';

@Table
export class UserChannel extends Model {
  @ForeignKey(() => Channel)
  @Column
  channelUUID: string;

  @ForeignKey(() => User)
  @Column
  userID: string;
}
