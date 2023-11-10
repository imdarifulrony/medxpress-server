import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { StocksService } from './stocks.service';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './schema/stock.schema';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  async createStock(@Body() createStockDto: CreateStockDto): Promise<Stock> {
    try {
      return await this.stocksService.createStock(createStockDto);
    } catch (error) {
      throw new BadRequestException('Failed to create stock');
    }
  }

  @Get()
  async getAllStocks(): Promise<Stock[]> {
    try {
      return await this.stocksService.getAllStocks();
    } catch (error) {
      throw new NotFoundException('Failed to fetch stocks');
    }
  }

  @Get('shop/:shopId')
  async getAllStocksByShopId(
    @Param('shopId') shopId: string,
  ): Promise<Stock[]> {
    try {
      return await this.stocksService.getAllStocksByShopId(shopId);
    } catch (error) {
      throw new NotFoundException('Failed to fetch stocks');
    }
  }

  @Get(':stockId')
  async getStockById(@Param('stockId') stockId: string): Promise<Stock> {
    try {
      const stock = await this.stocksService.getStockById(stockId);
      if (!stock) {
        throw new NotFoundException('Stock not found');
      }
      return stock;
    } catch (error) {
      throw new NotFoundException('Stock not found');
    }
  }

  @Put(':stockId')
  async updateStock(
    @Param('stockId') stockId: string,
    @Body() updateStockDto: UpdateStockDto,
  ): Promise<Stock> {
    try {
      const stock = await this.stocksService.updateStock(
        stockId,
        updateStockDto,
      );
      if (!stock) {
        throw new NotFoundException('Stock not found');
      }
      return stock;
    } catch (error) {
      throw new BadRequestException('Failed to update stock');
    }
  }

  @Delete(':stockId')
  async deleteStock(@Param('stockId') stockId: string): Promise<Stock> {
    try {
      const stock = await this.stocksService.deleteStock(stockId);
      if (!stock) {
        throw new NotFoundException('Stock not found');
      }
      return stock;
    } catch (error) {
      throw new BadRequestException('Failed to delete stock');
    }
  }

  @Get('search/medicine')
  async searchStockByMedicine(
    @Query('medicineName') medicineName: string,
  ): Promise<Stock[]> {
    try {
      return await this.stocksService.searchStockByMedicine(medicineName);
    } catch (error) {
      throw new NotFoundException('Failed to search stocks by medicine');
    }
  }

  @Get('search/medicine-and-shop')
  async searchStockByMedicineIdAndShopId(
    @Query('medicineId') medicineId: string,
    @Query('shopId') shopId: string,
  ): Promise<Stock[]> {
    try {
      return await this.stocksService.searchStockByMedicineIdAndShopId(
        medicineId,
        shopId,
      );
    } catch (error) {
      throw new NotFoundException(
        'Failed to search stocks by medicine ID and shop ID',
      );
    }
  }
}
