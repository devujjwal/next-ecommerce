import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Type } from 'src/types/entities/type.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends CoreEntity {
  @Column()
  name: string;
  @Column()
  slug: string;
  parent?: Category;
  children?: Category[];
  details?: string;
  @Column('int')
  image?: Attachment;
  @Column()
  icon?: string;
  @Column('int')
  type?: Type;
  products?: Product[];
  language: string;
  translated_languages: string[];
}
