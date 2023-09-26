"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const order_service_1 = require("./order.service");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.user);
    const result = yield order_service_1.OrderService.createOrder(req.user, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'orders created  successfully',
        data: result,
    });
}));
// const getAllOrder = catchAsync(async (req: Request, res: Response) => {
//   const result = await OrderService.getAllOrders();
//   res.send({
//     success: true,
//     statusCode: 200,
//     message: 'orders retrieve  successfully',
//     data: result,
//   });
// });
const getSingleOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getSingleOrder(req.user);
    res.send({
        success: true,
        statusCode: 200,
        message: 'orders retrieve  successfully',
        data: result,
    });
}));
const getSpecificOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getSpecificOrder(req.params.id, req.user);
    res.send({
        success: true,
        statusCode: 200,
        message: 'orders retrieve  successfully',
        data: result,
    });
}));
exports.OrderController = {
    createOrder,
    // getAllOrder,
    getSpecificOrder,
    getSingleOrder,
};
