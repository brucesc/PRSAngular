export class User {
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;
    Active: boolean;

    constructor(
        Id: number,
        UserName: string,
        Password: string,
        FirstName: string,
        LastName: string,
        Phone: string,
        Email: string,
        IsReviewer: boolean,
        IsAdmin: boolean,
        Active: boolean,
    ) {
        this.Id = Id;
        this.UserName = UserName;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Phone = Phone;
        this.Email = Email;
        this.IsReviewer = IsReviewer;
        this.IsAdmin = IsAdmin;
        this.Active = Active;
    }
}
