import { OmitType } from '@nestjs/swagger';
import { Product } from '../../db/entity/product.entity';

export class CreateProductDto extends OmitType(Product, ['id']) {}
