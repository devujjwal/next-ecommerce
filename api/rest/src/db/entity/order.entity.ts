import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  addressId: number;

  @Column()
  shippingCost: number;

  @Column()
  amount: number;

  @Column()
  total: number;

  @Column('int', { array: true })
  orderProductIds: number[];
}
