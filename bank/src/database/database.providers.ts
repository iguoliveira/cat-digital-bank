import { DataSource } from 'typeorm'

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3006,
                username: 'root',
                password: 'q5J83o559T^MajnlMzIUf',
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