import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsToMany,
  IsUUID,
  BelongsTo,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../users/user.entity';
import { UserChannel } from './../user-channels/user-channel.entity';

@Table
export class Channel extends Model {
  @IsUUID(4)
  @Column({
    type: DataType.UUID,
    unique: true,
    allowNull: false,
    defaultValue: () => {
      return uuidv4();
    },
  })
  UUID: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userID: number;

  @BelongsTo(() => User)
  user: User;

  // @BelongsToMany(() => User, () => UserChannel)
  // channels: (Channel & { UserChannel: UserChannel })[];
}
