import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './menu';
import { AuthenticateService } from '../../services/authenticate.service';
// import { PurchaseRequestService } from '../../services/purchase-request.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: Menu;
  // reviewBadgeCount: number;

  constructor(
    private auth: AuthenticateService,
    // private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.auth.logout(); // why is this here?
    this.auth.reviewPrivileges.subscribe( rev => {
     console.log(rev);
     if (this.menuItem.display == 'Review') {
      this.menuItem.visible = rev; }
    });
    this.auth.adminPrivileges.subscribe(adm => {
      console.log(adm);
      if (this.menuItem.display == 'Users' || this.menuItem.display == 'Vendors' || this.menuItem.display == 'Products') {
        this.menuItem.visible = adm;
      }
    });
    // this.PurchaseRequestSvc.NeedsReviewList().subscribe( p => {
    //   this.reviewBadgeCount = p.length;
    // });
  }

}
