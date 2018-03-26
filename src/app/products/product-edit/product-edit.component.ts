import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pagetitle: string = 'Product Edit';
  product: Product;
  vendors: Vendor[];

  constructor(
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private VendorSvc: VendorService
  ) {}

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    this.ProductSvc.Change(this.product).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products/list');
    });
  }

  getProductById(id) {
    this.ProductSvc.Get(id).subscribe(p => {
      this.product = p;
      console.log('Product:', p);
    });
  }

  ngOnInit() {
    this.VendorSvc.List().subscribe( v => {
      console.log(v);
      this.vendors = v;
    });

    this.route.params.subscribe(p => {
      const id = p['id'];
      this.getProductById(id);
    });
  }
}
