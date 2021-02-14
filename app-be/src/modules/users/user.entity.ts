import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
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
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;
}

// @Table
// export class User extends Model<User> {
//   @Column({
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//   })
//   GUID: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   name: string;

//   @Column({
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//   })
//   email: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   password: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: true,
//   })
//   nickname: string;

//   @Column({
//     type: DataType.BOOLEAN,
//     allowNull: true,
//   })
//   isAdmin: string;

//   @Column({
//     type: DataType.BOOLEAN,
//     allowNull: true,
//   })
//   isRootAdmin: string;
// }
