import { Type } from 'class-transformer';
import { PrimaryGeneratedColumn } from 'typeorm';
export class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Type(() => Date)
  created_at: Date;
  @Type(() => Date)
  updated_at: Date;
}
