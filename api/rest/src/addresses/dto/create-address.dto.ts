import { OmitType } from '@nestjs/swagger';
import { Address } from '../entities/address.entity';

export class CreateAddressDto extends OmitType(Address, ['id']) {}
