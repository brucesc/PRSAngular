import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { AuthenticateService } from '../../services/authenticate.service';
import { SortPipe } from '../../pipes/sort.pipe';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pagetitle: string = 'Product List';
  products: Product[];
  sortBy: string = 'Id';

  constructor(private ProductSvc: ProductService) { }

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  ngOnInit() {
    this.ProductSvc.List().subscribe( prod => {
      console.log(prod);
      this.products = prod;
    });
  }

}
