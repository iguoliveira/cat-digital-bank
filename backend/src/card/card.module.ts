import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cardProviders } from './card.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [CardController],
  providers: [...cardProviders, CardService]
})
export class CardModule { }
