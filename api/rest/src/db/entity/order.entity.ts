import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Address } from './address.entity';
import { OrderDetails } from './order-details.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @ManyToOne(() => Address, (address) => address.id, { cascade: true })
  @JoinColumn()
  address: Address;

  @Column()
  shippingCost: number;

  @Column()
  amount: number;

  @Column()
  total: number;

  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.id, {
    cascade: true,
  })
  @JoinTable()
  orderDetails: OrderDetails[];
}
