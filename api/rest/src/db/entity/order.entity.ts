import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  customerId: number;

  @Column()
  addressId: number;

  @Column()
  shippingCost: number;

  @Column()
  deliveryFee: number;

  @Column()
  amount: number;

  @Column()
  total: number;

  @Column('int', { array: true })
  orderProductIds: number[];
}
