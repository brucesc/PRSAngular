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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/login', component: UserLoginComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },
  { path: 'vendors/list', component: VendorListComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'purchaserequests/detail/:id', component: PurchaseRequestDetailComponent },
  { path: 'purchaserequests/edit/:id', component: PurchaseRequestEditComponent },
  { path: 'purchaserequests/list', component: PurchaseRequestListComponent },
  { path: 'purchaserequests/create', component: PurchaseRequestCreateComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'purchaserequestlineitems/detail/:rid/:rlid', component: PurchaseRequestLineItemDetailComponent },
  { path: 'purchaserequestlineitems/edit/:rid/:rlid', component: PurchaseRequestLineItemEditComponent },
  { path: 'purchaserequestlineitems/list/:id', component: PurchaseRequestLineItemListComponent },
  { path: 'purchaserequestlineitems/create/:id', component: PurchaseRequestLineItemCreateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
