import { CreateOrderRequest, CreateProductOrderDetails } from '@bs-commerce/models';
import { CartItem, Cart, CartResponse, ChangeStatusEntity, GetAllOrderQueryEntity, OrderEntity, OrderIncompleteStatEntity, OrderSortQuery, OrderStatEntity, ProductOrder } from '../../../entity/order';
export declare abstract class IOrderDatabase {
    abstract createOrder: (userId: string, body: CreateOrderRequest) => Promise<OrderEntity>;
    abstract addPhotoDetails: (products: CreateProductOrderDetails[]) => Promise<ProductOrder[]>;
    abstract getOrderListByUserId: (userId: string, sortObj: OrderSortQuery) => Promise<OrderEntity[]>;
    abstract findOrder: (query: Record<string, any>) => Promise<OrderEntity>;
    abstract getOrderStatistics: () => Promise<OrderStatEntity>;
    abstract getIncompleteStatistics: () => Promise<OrderIncompleteStatEntity>;
    abstract changeStatus: (body: ChangeStatusEntity) => Promise<OrderEntity>;
    abstract getOrderList: (query?: GetAllOrderQueryEntity, skip?: number, limit?: number) => Promise<OrderEntity[]>;
    abstract getAvailableProducts: (productIds: string[]) => Promise<any>;
    abstract getCart: (userId: string) => Promise<Cart | null>;
    abstract populateItemsInCart: (userId: string, items: CartItem[]) => Promise<CartResponse | null>;
    abstract clearCart: (userId: string) => Promise<CartResponse | null>;
}
