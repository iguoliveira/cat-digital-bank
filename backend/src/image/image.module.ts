import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { imageProviders } from './image.providers';

@Module({
  controllers: [ImageController],
  providers: [...imageProviders ,ImageService],
  imports: [DatabaseModule, UserModule],
})

export class ImageModule {}