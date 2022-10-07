import { Controller, UseInterceptors, UploadedFiles, Post, Get } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from './config';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('file', null, MulterOptions))
  async uploadFile(@UploadedFiles() file) {
    return this.imageService.create(file)
  }

  @Get('all')
  async findAll() {
    return this.imageService.findAll();
  }
}
