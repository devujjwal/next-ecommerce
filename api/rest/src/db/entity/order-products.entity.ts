import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderProducts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  orderQuantity: number;

  @Column()
  unitPrice: number;

  @Column()
  subTotal: number;

  @Column()
  orderId: number;
}
