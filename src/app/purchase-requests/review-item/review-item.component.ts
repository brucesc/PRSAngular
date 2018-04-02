import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchase-request';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  pagetitle: string = 'Purchase Request Review';
  purchaseRequest: PurchaseRequest;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticateService
  ) { }

  Approve(): void {
    this.purchaseRequest.Status = 'APPROVED';
    this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe( p => {
      console.log(p);
      this.router.navigateByUrl('/purchaserequests/needsreviewlist');
    });
  }

  Reject(): void {
    this.purchaseRequest.Status = 'REJECTED';
    this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe(p => {
      console.log(p);
      this.router.navigateByUrl('/purchaserequests/needsreviewlist');
    });
  }

  getPurchaseRequest(id): void {
    this.PurchaseRequestSvc.Get(id).subscribe( p => {
      this.purchaseRequest = p;
      console.log(p);
    });
  }

  ngOnInit() {
    this.route.params.subscribe( p => {
      let id = p['id'];
      this.getPurchaseRequest(id);
    });
  }

}
