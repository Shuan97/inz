import { User } from './../users/user.entity';
import { Channel } from './../channels/channel.entity';
import {
  Table,
  Model,
  ForeignKey,
  Column,
  DataType,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class UserChannel extends Model {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userUUID: string;

  @ForeignKey(() => Channel)
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  channelUUID: string;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Channel)
  channel: Channel;
}
