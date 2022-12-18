import { OmitType } from '@nestjs/swagger';
import { Order } from '../../db/entity/order.entity';
import { OrderDetails } from 'src/db/entity/order-details.entity';

export class CreateOrderDto extends OmitType(Order, ['id']) {}

export class CreateOrderProductsDto extends OmitType(OrderDetails, ['id']) {}
