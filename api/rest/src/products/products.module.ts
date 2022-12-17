import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ProductsController,
  PopularProductsController,
} from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/db/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, PopularProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
