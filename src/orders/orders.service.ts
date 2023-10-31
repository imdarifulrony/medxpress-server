import { Order } from './schema/order.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    try {
      const createdOrder = new this.orderModel(createOrderDto);
      return createdOrder.save();
    } catch (error) {
      throw new Error('Failed to create the order');
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      return this.orderModel.find().exec();
    } catch (error) {
      throw new Error('Failed to fetch orders');
    }
  }

  async findOrderById(orderId: string): Promise<Order> {
    try {
      return this.orderModel.findById(orderId).exec();
    } catch (error) {
      throw new Error('Order not found');
    }
  }

  async updateOrder(
    orderId: string,
    updateOrderDto: CreateOrderDto,
  ): Promise<Order> {
    try {
      return this.orderModel
        .findByIdAndUpdate(orderId, updateOrderDto, { new: true })
        .exec();
    } catch (error) {
      throw new Error('Failed to update the order');
    }
  }

  async deleteOrder(orderId: string): Promise<Order> {
    try {
      return this.orderModel.findByIdAndRemove(orderId).exec();
    } catch (error) {
      throw new Error('Failed to delete the order');
    }
  }

  async getOrdersByUserId(userId: string): Promise<Order[]> {
    try {
      return this.orderModel.find({ userId }).exec();
    } catch (error) {
      throw new Error('Failed to fetch orders by user ID');
    }
  }
}
