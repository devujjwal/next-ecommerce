import { UserAddress } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Coupon } from 'src/coupons/entities/coupon.entity';
import { File, Product } from 'src/products/entities/product.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity } from 'typeorm';
import { OrderStatus } from './order-status.entity';

export enum PaymentGatewayType {
  STRIPE = 'stripe',
  CASH_ON_DELIVERY = 'cod',
}

@Entity()
export class Order extends CoreEntity {
  tracking_number: string;

  @Column()
  customer_id: number;
  @Column()
  customer_contact: string;
  customer: User;
  parent_order?: Order;
  children: Order[];
  @Column('int')
  status: OrderStatus;
  @Column('decimal')
  amount: number;
  sales_tax: number;
  @Column('decimal')
  total: number;
  @Column('decimal')
  paid_total: number;
  payment_id?: string;
  payment_gateway: PaymentGatewayType;
  @Column('int')
  coupon?: Coupon;
  shop: Shop;
  @Column()
  discount?: number;
  @Column()
  delivery_fee: number;
  delivery_time: string;
  products: Product[];
  billing_address: UserAddress;
  shipping_address: UserAddress;
  language: string;
  translated_languages: string[];
}

export class OrderFiles extends CoreEntity {
  purchase_key: string;
  digital_file_id: number;
  order_id?: number;
  customer_id: number;
  file: File;
  fileable: Product;
}
