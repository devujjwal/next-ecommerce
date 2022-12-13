import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  parent?: Category;

  @Column()
  children?: Category[];

  @Column()
  details?: string;

  @Column()
  icon?: string;

  @Column()
  language: string;
}
