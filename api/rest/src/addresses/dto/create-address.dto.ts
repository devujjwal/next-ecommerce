import { OmitType } from '@nestjs/swagger';
import { Address } from '../../db/entity/address.entity';

export class CreateAddressDto extends OmitType(Address, ['id']) {}
