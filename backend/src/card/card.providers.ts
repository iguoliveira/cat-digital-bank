import { DataSource } from "typeorm";
import { Card } from "./entities/card.entity";
import { CARD_REPOSITORY, DATA_SOURCE } from '../constants'

export const cardProviders = [
    {
        provide: CARD_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Card),
        inject: [DATA_SOURCE],
    }
]