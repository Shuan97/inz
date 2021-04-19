import { UserDto } from 'modules/users/dto/user.dto';
import { User } from 'modules/users/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { name, email, nickname, isAdmin, isRootAdmin } = data;
  const userDto: UserDto = { name, email, nickname, isAdmin, isRootAdmin };
  return userDto;
};
