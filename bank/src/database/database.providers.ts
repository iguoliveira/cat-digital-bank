import { DataSource } from 'typeorm'
import { DATA_SOURCE } from '../constants'

export const databaseProviders = [
    {
        provide: DATA_SOURCE,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'sqlite',
                // host: 'localhost',
                // port: 3306,
                // username: 'root',
                // password: 'q5J83o559T^MajnlMzIUf',
                database: 'bank',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true, //TURN FALSE IN PRODUCTION
            })

            return dataSource.initialize()
        }
    }
]