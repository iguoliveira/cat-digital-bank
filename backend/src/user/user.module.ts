import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/user/user.providers';
import { CardModule } from 'src/card/card.module';

@Module({
  imports: [DatabaseModule, CardModule],
  providers: [
      ...userProviders,
      UserService,
  ],
  controllers: [
      UserController,
  ],
  exports: [
    UserService
  ]
})

export class UserModule {}
