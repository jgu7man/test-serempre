import { Injectable } from '@angular/core';
import { iProductOption, iProductVariable } from '../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: iOrder = {
    subtotal: 0, total: 0, shipping: 0, addons:[]
  };
  constructor(
    private _products: ProductsService
  ) {
    this.initOrder()
   }


  initOrder() {
    this._products.currentProduct$.subscribe(product => {
      this.currentOrder = {
        ...this.currentOrder,
        subtotal: product.price,
        shipping: product.shipping,
        total: this.currentOrder.total
      }
    })
  }
  addOption(name: string, option: iProductOption) {
    let addonStored = this.currentOrder.addons.length > 0 ?
      this.currentOrder.addons.find(a => a.name === name) :
      undefined

    if (addonStored) {
      addonStored.option.title = option.option
      addonStored.option.price = option.price
    } else {
      this.currentOrder.addons = [...this.currentOrder.addons, {
        name, option: { title: option.option, price: option.price}
      }]
    }
  }

  get total(): number {
    let addonsPrices: number[] = this.currentOrder.addons.length <= 0 ? [0]
      : this.currentOrder.addons.map(a => a.option.price)
    return addonsPrices.reduce((a, b) => a + b, 0) + this.currentOrder.subtotal + this.currentOrder.shipping
  }
}


interface iOrder {
  subtotal: number;
  shipping: number;
  addons: iAddon[];
  total: number
}

interface iAddon {
  name: string;
  option: {
    title: string;
    price: number;
  }
}
