/**
 * @module OrdersService
 * @description Service for managing orders.
 */
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

  /**
   * @description Create a new order.
   * @param {CreateOrderDto} createOrderDto - The DTO containing information for creating a new order.
   * @returns {Promise<Order>} The newly created order.
   */
  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    try {
      const createdOrder = new this.orderModel(createOrderDto);
      const savedOrder = await createdOrder.save();
      return savedOrder;
    } catch (error) {
      throw new Error('Failed to create the order');
    }
  }

  /**
   * @description Get all orders.
   * @returns {Promise<Order[]>} A list of all orders.
   */
  async getAllOrders(): Promise<Order[]> {
    try {
      return this.orderModel.find().exec();
    } catch (error) {
      throw new Error('Failed to fetch orders');
    }
  }

  /**
   * @description Find details of a specific order by its ID.
   * @param {string} orderId - The ID of the order to retrieve.
   * @returns {Promise<Order>} Details of the requested order.
   */
  async findOrderById(orderId: string): Promise<Order> {
    try {
      return this.orderModel.findById(orderId).exec();
    } catch (error) {
      throw new Error('Order not found');
    }
  }

  /**
   * @description Update the details of a specific order.
   * @param {string} orderId - The ID of the order to update.
   * @param {CreateOrderDto} updateOrderDto - The DTO containing updated information for the order.
   * @returns {Promise<Order>} The updated order details.
   */
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

  /**
   * @description Delete a specific order by ID.
   * @param {string} orderId - The ID of the order to delete.
   * @returns {Promise<Order>} Details of the deleted order.
   */
  async deleteOrder(orderId: string): Promise<Order> {
    try {
      return this.orderModel.findByIdAndRemove(orderId).exec();
    } catch (error) {
      throw new Error('Failed to delete the order');
    }
  }

  /**
   * @description Get orders for a specific user by their user ID, sorted in descending order of creation date.
   * @param {string} userId - The ID of the user to retrieve orders for.
   * @returns {Promise<Order[]>} A list of orders associated with the user, sorted by creation date in descending order.
   */
  async getOrdersByUserId(userId: string): Promise<Order[]> {
    try {
      return this.orderModel.find({ userId }).sort({ createdAt: -1 }).exec();
    } catch (error) {
      throw new Error('Failed to fetch orders by user ID');
    }
  }
}
