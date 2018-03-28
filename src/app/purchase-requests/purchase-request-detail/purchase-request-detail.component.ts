import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequest } from '../../models/purchase-request';
import { PurchaseRequestService } from '../../services/purchase-request.service';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  pagetitle: string = 'Purchase Request Detail';
  purchaseRequest: PurchaseRequest;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
     private router: Router,
      private route: ActivatedRoute
    ) { }

    review(): void {
      if (this.purchaseRequest.Total <= 50) {
        this.purchaseRequest.Status = 'APPROVED';
      } else {
        this.purchaseRequest.Status = 'REVIEW';
      }
      this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe( pr => {
        console.log(pr);
        this.router.navigateByUrl('/purchaserequests/list');
      });
    }

    remove(): void {
      this.PurchaseRequestSvc.Remove(this.purchaseRequest).subscribe( res => {
        console.log(res);
        this.router.navigateByUrl('/purchaserequests/list');
      });
    }

    getPurchaseRequestById(id) {
      this.PurchaseRequestSvc.Get(id).subscribe( p => {
        console.log('Purchase Request:', p);
        this.purchaseRequest = p;
      });
    }

  ngOnInit() {
    this.route.params.subscribe( p => {
      let id = p['id'];
      this.getPurchaseRequestById(id);
    });
  }

}
