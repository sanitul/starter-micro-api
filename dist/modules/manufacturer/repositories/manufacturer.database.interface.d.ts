import { Manufacturer } from '../../../entity/manufacturer';
export declare abstract class IManufacturerDatabase {
    abstract createManufacturer: (manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract getAllManufacturers: (skip?: number, limit?: number) => Promise<Manufacturer[] | null>;
    abstract findManufacturersCount: (searchQuery?: string) => Promise<number | null>;
    abstract getManufacturer: (query: Record<string, string>) => Promise<Manufacturer | null>;
    abstract updateManufacturer: (manufacturerId: string, manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract deleteManufacturer: (manufacturerId: string) => Promise<Manufacturer | null>;
}
