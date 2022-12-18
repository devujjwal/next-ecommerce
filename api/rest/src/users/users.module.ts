import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ProfilesController, UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../addresses/entities/address.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address, User])],
  controllers: [UsersController, ProfilesController],
  providers: [UsersService],
})
export class UsersModule {}
