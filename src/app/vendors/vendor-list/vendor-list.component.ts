import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';
import { AuthenticateService } from '../../services/authenticate.service';
import { SortPipe } from '../../pipes/sort.pipe';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  pagetitle = 'Vendor List';
  vendors: Vendor[];
  sortBy = 'Id';

  constructor(private VendorSvc: VendorService) {}

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  ngOnInit() {
    this.VendorSvc.List().subscribe(v => {
      console.log(v);
      this.vendors = v;
    });
  }
}
