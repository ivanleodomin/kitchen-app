import mongoose from 'mongoose'
import Order from '../../../Domain/entities/Order';

const OrderSchema = new mongoose.Schema<Order>(
    {
        status: { type: String, required: true },
        recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'recipe', required: true },
    },
    {
        versionKey: false
    }
);

const OrderModel = mongoose.model<Order>('order', OrderSchema);

export default OrderModel;
