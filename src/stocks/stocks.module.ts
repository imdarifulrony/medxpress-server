import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { Stock, StockSchema } from './schema/stock.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [StocksService],
  imports: [
    MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }]),
  ],
  controllers: [StocksController],
})
export class StocksModule {}
