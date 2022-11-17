import { DataSource } from "typeorm";
import { Image } from './entities/image.entity'
import { DATA_SOURCE, IMAGE_REPOSITORY } from '../constants'

export const imageProviders = [
    {
        provide: IMAGE_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Image),
        inject: [DATA_SOURCE],
    }
]