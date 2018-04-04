import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
  pagetitle: string = 'Purchase Request Edit';
  purchaseRequest: PurchaseRequest;
  users: User[];
  newDate: string;
  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private UserSvc: UserService
  ) {}

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    this.purchaseRequest.DateNeeded = new Date(this.newDate).toISOString();
    this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/list');
    });
  }

  getPurchaseRequestById(id) {
    this.PurchaseRequestSvc.Get(id).subscribe(p => {
      this.purchaseRequest = p;
      this.newDate = p.DateNeeded.slice(0, 10);
      console.log('Purchase Request:', p);
    });
  }

  ngOnInit() {
    this.UserSvc.List().subscribe(u => {
      console.log(u);
      this.users = u;
    });
    this.route.params.subscribe(p => {
      const id = p['id'];
      this.getPurchaseRequestById(id);
    });
  }
}
