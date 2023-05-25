import { FilterQuery, UpdateQuery } from "mongoose";
import Order, { OrderStatus } from "../../Domain/entities/Order";
import Recipe from "../../Domain/entities/Recipe";
import OrderRepository, { OrderPage } from "../../Domain/repositories/orderRepository";
import OrderModel from "../database/collections/Orders";


export default class IOrderRepository implements OrderRepository {
    async register(recipe: Recipe): Promise<Order> {
        const order = new OrderModel({
            recipe: recipe.id,
            status: OrderStatus.QUEUED
        })

        await order.save()
        return order
    };

    async getAll(filter: FilterQuery<Order> = {}, page: number = 1, skip: number = 0, limit: number = 10): Promise<OrderPage> {

        const totalPages = await OrderModel.countDocuments(filter)
        const orders = await OrderModel.find(filter).skip(skip).limit(limit)
        return {
            records: orders,
            totalPages: totalPages,
            perPage: limit,
            currentPage: page
        }

    };

    async getById(id: string): Promise<Order | null> {
        try {
            return await OrderModel.findOne({ _id: id }).populate('recipe')
        } catch (err) {
            console.log("Order not found")
            return null
        }
    }

    async update(orderId: string, update: UpdateQuery<Order>): Promise<Order | null> {
        try {
            const updated = await OrderModel.findOneAndUpdate<Order>({ _id: orderId }, update, { new: true })
            return updated
        } catch (err) {
            console.log("Error updating order", err)
            return null
        }
    }

}