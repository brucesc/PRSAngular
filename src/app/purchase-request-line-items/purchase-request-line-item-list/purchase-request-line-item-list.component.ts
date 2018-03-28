import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { PurchaseRequest } from '../../models/purchase-request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-request-line-item-list',
  templateUrl: './purchase-request-line-item-list.component.html',
  styleUrls: ['./purchase-request-line-item-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {

  pagetitle: string = 'Line Items List';
  purchaseRequest: PurchaseRequest;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private route: ActivatedRoute
  ) { }

  getPurchaseRequestById(id) {
    this.PurchaseRequestSvc.Get(id).subscribe( pr => {
      console.log(pr);
      this.purchaseRequest = pr;
    });
  }


  ngOnInit() {
    this.route.params.subscribe( pr => {
      let id = pr['id'];
      console.log(id);
      this.getPurchaseRequestById(id);
    });
  }

}
