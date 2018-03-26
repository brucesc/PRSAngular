import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pagetitle: string = 'Product Detail';
  product: Product;

  constructor(
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.ProductSvc.Remove(this.product).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products/list');
    });
  }

  getVendorById(id) {
    this.ProductSvc.Get(id).subscribe(prod => {
      this.product = prod;
      console.log('Product:', prod);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      let id = p['id'];
      this.getVendorById(id);
    });
  }
}
