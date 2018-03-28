import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PurchaseRequestLineItem } from '../models/purchase-request-line-item';

const url = 'http://localhost:63522/PurchaseRequestLineItems/';

@Injectable()
export class PurchaseRequestLineItemService {
  constructor(private http: HttpClient) {}

  List(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequestLineItem[]>;
  }

  Get(id): Observable<PurchaseRequestLineItem> {
    return this.http.get(url + 'Get/' + id) as Observable<PurchaseRequestLineItem>;
  }

  Create(purchaseRequestLineItem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Create', purchaseRequestLineItem) as Observable<any>;
  }

  Change(purchaseRequestLineItem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Change', purchaseRequestLineItem) as Observable<any>;
  }

  Remove(purchaseRequestLineItem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Remove', purchaseRequestLineItem) as Observable<any>;
  }
}
