import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { AuthenticateService } from '../../services/authenticate.service';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  pagetitle: string = 'Purchase Request List';
  purchaseRequests: PurchaseRequest[];
  sortBy: string = 'Id';

  constructor(private PurchaseRequestSvc: PurchaseRequestService) { }

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  ngOnInit() {
    this.PurchaseRequestSvc.List().subscribe( p => {
      console.log(p);
      this.purchaseRequests = p;
    });
  }

}
