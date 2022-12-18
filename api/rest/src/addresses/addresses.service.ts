import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address as AddressEntity } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) {}
  create(createAddressDto: CreateAddressDto) {
    return this.addressRepository.save(createAddressDto);
  }

  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    const record = this.addressRepository.findOneBy({ customer: id });
    return this.addressRepository.save({ ...record, ...updateAddressDto });
  }

  remove(id: number) {
    return [];
  }
}
