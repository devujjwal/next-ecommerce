import { OmitType } from '@nestjs/swagger';
import { Product } from '../../db/entity/product.entity';

export class CreateProductDto extends OmitType(Product, [
  'id',
  // 'slug',
  'created_at',
  'updated_at',
  'orders',
  'pivot',
  'shop',
  'tags',
  'type',
  'related_products',
  'variation_options',
  'translated_languages',
]) {}
