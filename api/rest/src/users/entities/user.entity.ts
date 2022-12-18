import { Address } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
// import { Order } from 'src/orders/entities/order.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Column, Entity } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User extends CoreEntity {
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password?: string;
  shop_id?: number;
  profile?: Profile;
  shops?: Shop[];
  managed_shop?: Shop;
  @Column()
  is_active?: boolean = true;
  @Column('json')
  address?: Address[];
  // orders?: Order[];
}
