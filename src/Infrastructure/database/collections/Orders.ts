import mongoose from 'mongoose'
import Order from '../../../Domain/entities/Order';

const OrderSchema = new mongoose.Schema<Order>({
    status: { type: String, required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'recipe', required: true },
});

const OrderModel = mongoose.model<Order>('order', OrderSchema);

export default OrderModel;
