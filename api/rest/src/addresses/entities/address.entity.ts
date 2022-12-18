import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity } from 'typeorm';

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

export class UserAddress {
  street_address: string;
  country: string;
  city: string;
  state: string;
  zip: string;
}

@Entity()
export class Address extends CoreEntity {
  @Column()
  title: string;
  default: boolean;
  @Column('json')
  address: UserAddress;
  @Column()
  type: AddressType;
  @Column('int')
  customer: number;
}
