import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './users.controller';
import { userProviders } from './users.providers';
import { UserService } from './users.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...userProviders,
        UserService,
    ],
    controllers: [
        UserController,
    ]
})

export class UserModule { }
