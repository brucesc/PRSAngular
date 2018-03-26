import { ActivatedRoute } from '@angular/router';
export class PurchaseRequest {
    Id: number;
    UserId: number;
    Description: string;
    Justification: string;
    DateNeeded: number;
    DeliveryMode: string;
    Status: string;
    Total: number;
    Active: boolean;
    ReasonForRejection: string;

    constructor(
    Id: number,
    UserId: number,
    Description: string,
    Justification: string,
    DateNeeded: number,
    DeliveryMode: string,
    Status: string,
    Total: number,
    Active: boolean,
    ReasonForRejection: string,
    ) {
        this.Id = Id;
        this.UserId = UserId;
        this.Description = Description;
        this.Justification = Justification;
        this.DateNeeded = DateNeeded;
        this.DeliveryMode = DeliveryMode;
        this.Status = Status;
        this.Total = Total;
        this.Active = Active;
        this.ReasonForRejection = ReasonForRejection;
    }
}
