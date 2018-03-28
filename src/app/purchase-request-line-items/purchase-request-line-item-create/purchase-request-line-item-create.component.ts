import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

  pagetitle: string = 'Line Item Create';
  products: Product[];
  rId: number;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, 0, 0, 1);

  constructor(
    private ProductSvc: ProductService,
    private PRLISvc: PurchaseRequestLineItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.prli.PurchaseRequestId = this.rId;
    console.log('Before Create:', this.prli);
    this.PRLISvc.Create(this.prli).subscribe( prli => {
      console.log('After Create:', prli);
      this.router.navigateByUrl('/purchaserequestlineitems/list/' + this.rId);
    });
  }

  getProductList() {
    this.ProductSvc.List().subscribe(p => {
      this.products = p;
      console.log('Products:', this.products);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.rId = +p['id'];
      console.log(p);
      this.getProductList();
    });
  }

}
