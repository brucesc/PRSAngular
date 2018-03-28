import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  pagetitle: string = 'Vendor Edit';
  vendor: Vendor;

  constructor(
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  change(): void {
    this.VendorSvc.Change(this.vendor).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  getVendorById(id) {
    this.VendorSvc.Get(id).subscribe(v => {
      this.vendor = v;
      console.log('Vendor:', v);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      const id = p['id'];
      this.getVendorById(id);
    });
  }
}

