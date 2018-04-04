import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../models/purchase-request';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  purchaseRequests: PurchaseRequest[];
  pagetitle: string = 'Review List';
  sortBy: string = 'Id';

  constructor(
    private auth: AuthenticateService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) {}

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  ngOnInit() {
    this.PurchaseRequestSvc.NeedsReviewList().subscribe(p => {
      this.purchaseRequests = p;
      console.log(p);
    });
  }
}
