import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  pagetitle: string = 'Purchase Request List';
  purchaseRequests: PurchaseRequest[];

  constructor(private PurchaseRequestSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.PurchaseRequestSvc.List().subscribe( p => {
      console.log(p);
      this.purchaseRequests = p;
    });
  }

}
