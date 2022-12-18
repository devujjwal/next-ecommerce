import { AttributeValue } from 'src/attributes/entities/attribute-value.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Type } from 'src/types/entities/type.entity';
import { Column, Entity } from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';

enum ProductStatus {
  PUBLISH = 'publish',
  DRAFT = 'draft',
}

enum ProductType {
  SIMPLE = 'simple',
  VARIABLE = 'variable',
}
@Entity()
export class Product extends CoreEntity {
  @Column()
  name: string;
  @Column()
  slug: string;
  type: Type;
  @Column()
  type_id: number;
  @Column()
  product_type: ProductType;
  @Column('json')
  categories: Category[];
  tags?: Tag[];
  variations?: AttributeValue[];
  variation_options?: Variation[];
  pivot?: OrderProductPivot;
  orders?: Order[];
  shop: Shop;
  shop_id: number;
  related_products?: Product[];
  @Column()
  description: string;
  @Column()
  in_stock: boolean;
  @Column()
  is_taxable: boolean;
  sale_price?: number;
  max_price?: number;
  min_price?: number;
  @Column()
  sku?: string;
  @Column('json')
  gallery?: Attachment[];
  @Column('json')
  image?: Attachment;
  status: ProductStatus;
  height?: string;
  length?: string;
  width?: string;
  @Column()
  price?: number;
  quantity: number;
  unit: string;
  ratings: number;
  in_wishlist: boolean;
  my_review?: Review[];
  language?: string;
  translated_languages?: string[];
}

export class OrderProductPivot {
  variation_option_id?: number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

export class Variation {
  id: number;
  title: string;
  price: number;
  sku: string;
  is_disable: boolean;
  sale_price?: number;
  quantity: number;
  options: VariationOption[];
}

export class VariationOption {
  name: string;
  value: string;
}

export class File extends CoreEntity {
  attachment_id: number;
  url: string;
  fileable_id: number;
}
