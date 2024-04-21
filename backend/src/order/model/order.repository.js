import mongoose from 'mongoose';
import OrderModel from './order.schema.js';
import ProductModel from '../../product/model/product.schema.js';

export const createNewOrderRepo = async (data, userId) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  console.log(userId, "iddd...");

  try {
    const { shippingInfo, orderedItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = data;
    console.log(shippingInfo);

    const order = new OrderModel({
      shippingInfo,
      orderedItems,
      user: userId,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now()
    });

    // Save the order document
    await order.save({ session });

    await ProductModel.updateOne(
      {_id: order.orderedItems.product},
      {$inc: {stock: -1}},
      {session}
    );

    await session.commitTransaction();
    session.endSession();

    return order;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
