import {
  Table,
  Column,
  Model,
  DataType,
  IsUUID,
  BelongsToMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { Channel } from './../channels/channel.entity';
import { UserChannel } from './../user-channels/user-channel.entity';

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    primaryKey: true,
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

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  nickname: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAdmin: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  readonly isRootAdmin: boolean;

  // @BeforeCreate
  // static removePriviliges(instance: User) {
  //   instance.isAdmin = false;
  //   instance.isRootAdmin = false;
  // }

  // @BelongsToMany(() => Channel, {
  //   foreignKey: 'channelUUID',
  //   otherKey: 'userUUID',
  //   through: () => UserChannel,
  // })

  @BelongsToMany(() => Channel, () => UserChannel, 'userUUID', 'channelUUID')
  channels: (Channel & { UserChannel: UserChannel })[];
  // @BelongsToMany(() => Channel, { through: 'UserChannel' })
  // channels: Channel[];
}
