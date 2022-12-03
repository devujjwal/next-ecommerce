import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import {
  GenerateExportUrlResolver,
  GenerateInvoiceDownloadResolver,
  OrderFileResolver,
  OrdersResolver,
} from './orders.resolver';

@Module({
  providers: [
    OrdersResolver,
    OrdersService,
    OrderFileResolver,
    GenerateExportUrlResolver,
    GenerateInvoiceDownloadResolver,
  ],
})
export class OrdersModule {}
