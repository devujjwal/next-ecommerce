import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  sku: string;

  @Column()
  warehouse: string;

  @Column()
  in_stock: boolean;

  @Column()
  exp_delivery: boolean;

  @Column()
  exp_available: boolean;

  @Column()
  delivery_date: Date;

  @Column()
  price: number;

  @Column()
  price_2_year: number;

  @Column()
  category: string;

  @Column()
  category_name: string;

  @Column()
  image_url: string;

  @Column('text', { array: true })
  images_url: string[];
}
