import { Controller, UseInterceptors, UploadedFiles, Post, Body } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from './config';
import { ImageService } from './image.service';
import { User } from 'src/user/entities/user.entity';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('file', null, MulterOptions))
  async uploadFile(@UploadedFiles() file) {
    console.log(file[0].path)
  }
}
