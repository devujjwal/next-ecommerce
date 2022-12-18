import { OmitType } from '@nestjs/swagger';
import { Order, PaymentGatewayType } from '../entities/order.entity';

export class CreateOrderDto extends OmitType(Order, ['id']) {}

export class UserAddressInput {
  street_address: string;
  country: string;
  city: string;
  state: string;
  zip: string;
}

export class ConnectProductOrderPivot {
  product_id: number;
  variation_option_id?: number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

export class CardInput {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  email?: string;
}
