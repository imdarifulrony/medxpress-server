import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schema/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    try {
      return await this.ordersService.createOrder(createOrderDto);
    } catch (error) {
      throw new BadRequestException('Failed to create the order');
    }
  }

  @Get()
  async getAllOrders(): Promise<Order[]> {
    try {
      return await this.ordersService.getAllOrders();
    } catch (error) {
      throw new NotFoundException('Failed to fetch orders');
    }
  }

  @Get(':orderId')
  async findOrderById(@Param('orderId') orderId: string): Promise<Order> {
    try {
      const order = await this.ordersService.findOrderById(orderId);
      if (!order) {
        throw new NotFoundException('Order not found');
      }
      return order;
    } catch (error) {
      throw new NotFoundException('Order not found');
    }
  }

  @Put(':orderId')
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: CreateOrderDto,
  ): Promise<Order> {
    try {
      const order = await this.ordersService.updateOrder(
        orderId,
        updateOrderDto,
      );
      if (!order) {
        throw new NotFoundException('Order not found');
      }
      return order;
    } catch (error) {
      throw new BadRequestException('Failed to update the order');
    }
  }

  @Delete(':orderId')
  async deleteOrder(@Param('orderId') orderId: string): Promise<Order> {
    try {
      const order = await this.ordersService.deleteOrder(orderId);
      if (!order) {
        throw new NotFoundException('Order not found');
      }
      return order;
    } catch (error) {
      throw new BadRequestException('Failed to delete the order');
    }
  }

  @Get('user/:userId')
  async getOrdersByUserId(@Param('userId') userId: string): Promise<Order[]> {
    try {
      return await this.ordersService.getOrdersByUserId(userId);
    } catch (error) {
      throw new NotFoundException('Failed to fetch orders by user ID');
    }
  }
}
