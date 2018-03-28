import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';

@Component({
  selector: 'app-purchase-request-line-item-detail',
  templateUrl: './purchase-request-line-item-detail.component.html',
  styleUrls: ['./purchase-request-line-item-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {
  pagetitle = 'Line Item Detail';
  prli: PurchaseRequestLineItem;
  rId: any;
  rlId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService
  ) {}

  remove(): void {
    this.PurchaseRequestLineItemSvc.Remove(this.prli).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequestlineitems/list/' + this.rId);
    });
  }

  getLineItemById(id) {
    this.PurchaseRequestLineItemSvc.Get(id).subscribe(prli => {
      this.prli = prli;
      console.log(prli);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.rId = p['rid'];
      this.rlId = p['rlid'];
      this.getLineItemById(this.rlId);
    });
  }
}
