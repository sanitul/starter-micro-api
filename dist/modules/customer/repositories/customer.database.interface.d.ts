import { Customer, CustomerAddress } from '../../../entity/customer';
import { Otp } from '../../../entity/otp';
export declare abstract class ICustomerDatabase {
    abstract sendOtp: (data: Otp) => Promise<Otp | null>;
    abstract verifyOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract findOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract deleteOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract updateOtp: (query: Record<string, any>, data: object) => Promise<Otp | null>;
    abstract createCustomer: (customer: Customer) => Promise<Customer | null>;
    abstract findCustomer: (query: Record<string, any>) => Promise<Customer | null>;
    abstract getCustomerPassword: (query: Record<string, any>) => Promise<Customer | null>;
    abstract updateCustomer: (customerId: string, customer: Customer) => Promise<Customer | null>;
    abstract addCustomerNewAddress: (customerId: string, address: CustomerAddress) => Promise<Customer | null>;
    abstract updateCustomerAddress: (customerId: string, addressId: string, address: CustomerAddress) => Promise<Customer | null>;
    abstract deleteCustomerAddress: (customerId: string, addressId: string) => Promise<Customer | null>;
}
