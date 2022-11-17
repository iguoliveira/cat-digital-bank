import { Inject, Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { CARD_REPOSITORY } from "../constants"
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @Inject(CARD_REPOSITORY)
    private cardRepository: Repository<Card>,
  ) { }

  async findAll(): Promise<Card[]> {
    return this.cardRepository.find()
  }

  async create(createCardDto: CreateCardDto): Promise<Card> {
    let card = new Card()
    card.number = createCardDto.number
    card.code = createCardDto.code
    card.password = createCardDto.password
    card.type = createCardDto.type
    card.category = createCardDto.category
    card.expiration = createCardDto.expiration
    card.user = createCardDto.user
    return await this.cardRepository.save(card)
  }
}
