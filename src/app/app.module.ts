import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './services/user.service';
import { VendorService } from './services/vendor.service';
import { ProductService } from './services/product.service';
import { PurchaseRequestService } from './services/purchase-request.service';
import { PurchaseRequestLineItemService } from './services/purchase-request-line-item.service';
import { AuthenticateService } from './services/authenticate.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';

import { PurchaseRequestListComponent } from './purchase-requests/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-requests/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './purchase-requests/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './purchase-requests/purchase-request-create/purchase-request-create.component';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

import { PurchaseRequestLineItemListComponent } from './purchase-request-line-items/purchase-request-line-item-list/purchase-request-line-item-list.component';
import { PurchaseRequestLineItemDetailComponent } from './purchase-request-line-items/purchase-request-line-item-detail/purchase-request-line-item-detail.component';
import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-items/purchase-request-line-item-edit/purchase-request-line-item-edit.component';
import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-items/purchase-request-line-item-create/purchase-request-line-item-create.component';

import { ReviewListComponent } from './purchase-requests/review-list/review-list.component';
import { ReviewItemComponent } from './purchase-requests/review-item/review-item.component';

import { AuthGuard } from './guards/auth.guard';
import { ReviewerGuard } from './guards/reviewer.guard';
import { AdminGuard } from './guards/admin.guard';

import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    MenuComponent,
    MenuItemComponent,

    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,

    VendorListComponent,
    VendorEditComponent,
    VendorCreateComponent,
    VendorDetailComponent,

    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,

    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,

    PurchaseRequestLineItemListComponent,
    PurchaseRequestLineItemDetailComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLineItemCreateComponent,

    ReviewListComponent,
    ReviewItemComponent,

    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    VendorService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    ProductService,
    AuthenticateService,

    AuthGuard,
    ReviewerGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
