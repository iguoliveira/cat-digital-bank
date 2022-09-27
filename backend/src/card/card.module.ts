import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from 'src/database/database.module';
import { cardProviders } from './card.providers';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [CardController],
  providers: [...cardProviders, CardService]
})
export class CardModule { }
