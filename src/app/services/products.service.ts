import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { iProductDetails, iProductInfo, iProductVariable } from '../models/product.model';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  currentProduct$: Observable<iProductInfo>
  constructor(
    private _afs: AngularFirestore
  ) {

  }

  // Crea nuevos productos en la base de datos
  // addProduct(product: iProductInfo) {
  //   product.id = product.title.replace(/ /g,"-")
  //   this._afs.collection('products').doc(product.id).set(this.currentProduct)
  // }

  // Obtiene en tiempo real, el producto solicitado por la vista o ruta URL
  getProduct(productId: string) {
    return this.currentProduct$ = this._afs.collection('products')
      .doc<iProductInfo>(productId)
      .valueChanges()
  }





}
