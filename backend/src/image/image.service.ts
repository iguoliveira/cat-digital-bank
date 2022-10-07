import { Injectable, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { IMAGE_REPOSITORY } from 'src/constants';
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @Inject(IMAGE_REPOSITORY)
    private imageRepository: Repository<Image>,
  ) { }

  async findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async create(createImageDto: CreateImageDto): Promise<Image> {
    let image = new Image()
    image.path = createImageDto.path
    image.user = createImageDto.user
    return await this.imageRepository.save(image)
  }
}
