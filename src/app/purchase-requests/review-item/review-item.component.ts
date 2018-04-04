import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchase-request';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  pagetitle: string = 'Purchase Request Review';
  purchaseRequest: PurchaseRequest;
  sortBy: string = 'Id';

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticateService
  ) { }

  setSortBy(column: string): void {
    this.sortBy = column;
  }

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
