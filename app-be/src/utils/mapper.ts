import { GetUserDto } from 'modules/users/dto/getUser.dto';
import { User } from 'modules/users/user.entity';

export const toUserDto = (data: User): GetUserDto => {
  const { name, email, nickname, isAdmin, isRootAdmin } = data;
  const userDto: GetUserDto = { name, email, nickname, isAdmin, isRootAdmin };
  return userDto;
};
