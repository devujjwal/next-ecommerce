import { OmitType } from '@nestjs/swagger';
import { Order } from '../../db/entity/order.entity';
import { CreateAddressDto } from '../../addresses/dto/create-address.dto';
import { OrderProducts } from 'src/db/entity/order-products.entity';

export class CreateOrderDto extends OmitType(Order, ['id']) {
  address: CreateAddressDto;
  orderProducts: CreateOrderProductsDto;
}

export class CreateOrderProductsDto extends OmitType(OrderProducts, ['id']) {}
