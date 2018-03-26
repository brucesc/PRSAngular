import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pagetitle: string = 'Product List';
  products: Product[];

  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.List().subscribe( prod => {
      console.log(prod);
      this.products = prod;
    });
  }

}
