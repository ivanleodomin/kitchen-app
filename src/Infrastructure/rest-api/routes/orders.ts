import { Router } from "express";
import { orderController } from "../../dependencies";

const PATH = "/order"
const router = Router()

router.post(
    PATH + '/',
    orderController
        .createOrder
        .bind(orderController),
    orderController
        .sendResponse
        .bind(orderController)
)

router.put(
    PATH + '/prepare',
    orderController
        .prepareOrder
        .bind(orderController),
    orderController
        .sendResponse
        .bind(orderController)
)

router.put(
    PATH + '/finish',
    orderController.
        finishOrder
        .bind(orderController),
    orderController.
        sendResponse
        .bind(orderController)
)

router.get(
    PATH + '/:page',
    orderController.
        getOrders
        .bind(orderController),
    orderController.
        sendResponse
        .bind(orderController)
)

export default router