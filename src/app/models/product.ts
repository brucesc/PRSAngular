export class Product {
    Id: number;
    VendorId: number;
    PartNumber: string;
    Name: string;
    Price: number;
    Unit: string;
    PhotoPath: string;
    Active: boolean;

    constructor(
    Id: number,
    VendorId: number,
    PartNumber: string,
    Name: string,
    Price: number,
    Unit: string,
    PhotoPath: string,
    Active: boolean,
    ) {
        this.Id = Id;
        this.VendorId = VendorId;
        this.PartNumber = PartNumber;
        this.Name = Name;
        this.Price = Price;
        this.Unit = Unit;
        this.PhotoPath = PhotoPath;
        this.Active = Active;
    }
}
