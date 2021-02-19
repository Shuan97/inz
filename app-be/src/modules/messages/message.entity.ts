import { Channel } from './../channels/channel.entity';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Message extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  body: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userUUID: string;

  // @ForeignKey(() => User)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // userUUID: number;

  // @ForeignKey(() => Channel)
  // @Column({
  //   type: DataType.UUID,
  //   allowNull: false,
  // })
  // channelUUID: string;

  // @BelongsTo(() => User, { foreignKey: 'UUID' })
  @BelongsTo(() => User, { foreignKey: 'UUID' })
  user: User;

  // @BelongsTo(() => Channel)
  // channel: Channel;
}
