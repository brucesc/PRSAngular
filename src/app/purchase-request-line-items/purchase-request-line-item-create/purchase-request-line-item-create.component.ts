import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../../services/purchase-request.service';

@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

  pagetitle: string = 'Line Item Create';
  products: Product[];
  rId: number;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.rId, 0, 0 );

  constructor(
    private ProductSvc: ProductService,
    private PRLISvc: PurchaseRequestLineItemService,
    private PurchaseRequestSvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.PRLISvc.Create(this.prli).subscribe( prli => {
      console.log(prli);
      this.router.navigateByUrl('purchaserequestlineitems/list/rId');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.rId = p['id'];
      console.log(p);
    });
    this.ProductSvc.List().subscribe( p => {
      this.products = p;
      console.log(p);
    });
  }

}
