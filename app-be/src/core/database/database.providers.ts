import { UserChannel } from './../../modules/user-channels/user-channel.entity';
import { Channel } from './../../modules/channels/channel.entity';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Message } from 'src/modules/messages/message.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      // Tables to be generated in database
      sequelize.addModels([User, Message, Channel, UserChannel]);

      // Force tables to drop and re-create with no data
      // await sequelize.sync({ force: true });
      // await sequelize.sync();
      return sequelize;
    },
  },
];
