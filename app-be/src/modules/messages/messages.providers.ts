import { Message } from './message.entity';
import { MESSAGE_REPOSITORY } from '../../core/constants';

export const messagesProviders = [
  {
    provide: MESSAGE_REPOSITORY,
    useValue: Message,
  },
];
