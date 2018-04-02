import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { PurchaseRequestListComponent } from './purchase-requests/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-requests/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './purchase-requests/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './purchase-requests/purchase-request-create/purchase-request-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-items/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-items/purchase-request-line-item-edit/purchase-request-line-item-edit.component';
import { PurchaseRequestLineItemDetailComponent } from './purchase-request-line-items/purchase-request-line-item-detail/purchase-request-line-item-detail.component';
import { PurchaseRequestLineItemListComponent } from './purchase-request-line-items/purchase-request-line-item-list/purchase-request-line-item-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { ReviewListComponent } from './purchase-requests/review-list/review-list.component';
import { ReviewItemComponent } from './purchase-requests/review-item/review-item.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },
  { path: 'users/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'users/list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/create', component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: 'users/login', component: UserLoginComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard] },
  { path: 'vendors/edit/:id', component: VendorEditComponent, canActivate: [AuthGuard] },
  { path: 'vendors/list', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vendors/create', component: VendorCreateComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/needsreviewlist', component: ReviewListComponent},
  { path: 'purchaserequests/reviewitem/:id', component: ReviewItemComponent},
  { path: 'purchaserequests/detail/:id', component: PurchaseRequestDetailComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/edit/:id', component: PurchaseRequestEditComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/list', component: PurchaseRequestListComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequests/create', component: PurchaseRequestCreateComponent, canActivate: [AuthGuard] },
  { path: 'products/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequestlineitems/detail/:rid/:rlid', component: PurchaseRequestLineItemDetailComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequestlineitems/edit/:rid/:rlid', component: PurchaseRequestLineItemEditComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequestlineitems/list/:id', component: PurchaseRequestLineItemListComponent, canActivate: [AuthGuard] },
  { path: 'purchaserequestlineitems/create/:id', component: PurchaseRequestLineItemCreateComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
