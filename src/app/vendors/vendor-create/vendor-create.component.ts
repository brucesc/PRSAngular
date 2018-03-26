import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  pagetitle: string = 'Vendor Create';
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', false, true)

  constructor(private VendorSvc: VendorService, private router: Router) {}

  create(): void {
    this.VendorSvc.Create(this.vendor).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  ngOnInit() {}
}
