export class PurchaseRequestLineItem {
    Id: number;
    PurchaseRequestId: number;
    ProductId: number;
    Quantity: number;

    constructor(
    Id: number,
    PurchaseRequestId: number,
    ProductId: number,
    Quantity: number,
    ) {
        this.Id = Id;
        this.PurchaseRequestId = PurchaseRequestId;
        this.ProductId = ProductId;
        this.Quantity = Quantity;
    }
}
