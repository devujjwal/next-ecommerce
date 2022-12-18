import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Address } from '../addresses/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address]), UsersModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
