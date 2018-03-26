import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
 pagetitle: string = 'Vendor Detail';
 vendor: Vendor;

  constructor(
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.VendorSvc.Remove(this.vendor).subscribe(res => {
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
      let id = p['id'];
      this.getVendorById(id);
    });
  }
}
