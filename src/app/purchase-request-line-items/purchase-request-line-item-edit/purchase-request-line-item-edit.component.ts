import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { PurchaseRequestLineItemService } from '../../services/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from '../../models/purchase-request-line-item';

@Component({
  selector: 'app-purchase-request-line-item-edit',
  templateUrl: './purchase-request-line-item-edit.component.html',
  styleUrls: ['./purchase-request-line-item-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {

  pagetitle: string = 'Line Item Edit';
  products: Product[];
  rId: number;
  rlId: number;
  prli: PurchaseRequestLineItem;

  constructor(
    private ProductSvc: ProductService,
    private PRLISvc: PurchaseRequestLineItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    console.log('Before Change:', this.prli);
    this.PRLISvc.Change(this.prli).subscribe( res => {
      console.log('After Change:', res);
      this.router.navigateByUrl('/purchaserequestlineitems/list/' + this.rId);
    });
  }

  getPRLIById(id): void {
    console.log('Before Get, PRLI:', this.prli);
    this.PRLISvc.Get(id).subscribe( prli => {
      console.log('After Get, PRLI:', prli);
      this.prli = prli;
    });
  }

  getProducts(): void {
    console.log('Before Get, Products:', this.products);
    this.ProductSvc.List().subscribe( p => {
      console.log('After Get, Products', p);
      this.products = p;
    });
  }

  ngOnInit() {
    this.route.params.subscribe( p => {
      this.rId = +p['rid'];
      this.rlId = +p['rlid'];
      this.getProducts();
      this.getPRLIById(this.rlId);
    });
  }

}
