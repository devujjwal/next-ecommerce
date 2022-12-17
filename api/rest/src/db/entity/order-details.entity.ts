import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderQuantity: number;

  @Column()
  unitPrice: number;

  @Column()
  subTotal: number;

  @OneToOne(() => Product, (product) => product.id, { cascade: true })
  @JoinColumn()
  product: Product;
}
