import { DataSource } from "typeorm";
import { User } from './entities/users.entity'
import { USER_REPOSITORY, DATA_SOURCE } from '../constants'

export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [DATA_SOURCE],
    }
]