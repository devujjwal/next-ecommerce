import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { Address } from '../db/entity/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
