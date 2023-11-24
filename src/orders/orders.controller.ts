/**
 * @module OrdersController
 * @description Controller for orders routes.
 */
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

  /**
   * @description Create a new order.
   * @param {CreateOrderDto} createOrderDto - The DTO containing information for creating a new order.
   * @returns {Promise<Order>} The newly created order.
   */
  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    try {
      return await this.ordersService.createOrder(createOrderDto);
    } catch (error) {
      throw new BadRequestException('Failed to create the order');
    }
  }

  /**
   * @description Get all orders.
   * @returns {Promise<Order[]>} A list of all orders.
   */
  @Get()
  async getAllOrders(): Promise<Order[]> {
    try {
      return await this.ordersService.getAllOrders();
    } catch (error) {
      throw new NotFoundException('Failed to fetch orders');
    }
  }

  @Get('shop/:shopId')
  async getOrdersByShopId(@Param('shopId') shopId: string): Promise<Order[]> {
    try {
      return await this.ordersService.getOrdersByShopId(shopId);
    } catch (error) {
      throw new NotFoundException('Failed to fetch orders');
    }
  }

  /**
   * @description Find details of a specific order by ID.
   * @param {string} orderId - The ID of the order to retrieve.
   * @returns {Promise<Order>} Details of the requested order.
   */
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

  /**
   * @description Update the details of a specific order.
   * @param {string} orderId - The ID of the order to update.
   * @param {CreateOrderDto} updateOrderDto - The DTO containing updated information for the order.
   * @returns {Promise<Order>} The updated order details.
   */
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

  /**
   * @description Delete a specific order by ID.
   * @param {string} orderId - The ID of the order to delete.
   * @returns {Promise<Order>} Details of the deleted order.
   */
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
