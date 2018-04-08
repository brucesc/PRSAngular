import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  pagetitle: string = 'Purchase Request Create';
  purchaseRequest: PurchaseRequest = new PurchaseRequest(0, 0, '', '', '', '', 'NEW', 0, true, '');
  users: User[];

  constructor(
    private router: Router,
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.PurchaseRequestSvc.Create(this.purchaseRequest).subscribe( p => {
      console.log(p);
      this.router.navigateByUrl('/purchaserequests/list');
    });
  }

  ngOnInit() {
    this.UserSvc.List().subscribe( u => {
      console.log(u);
      this.users = u;
    });
  }

}
