import { Component,  HostListener, Input, OnInit } from '@angular/core';
import { iProductInfo } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'gzm-product-resume',
  templateUrl: './product-resume.component.html',
  styleUrls: ['./product-resume.component.scss']
})
export class ProductResumeComponent implements OnInit {


  @Input() product: iProductInfo
  toggleResume: boolean = false
  keepDown: boolean = false
  warranty: string

  constructor(
    public order_: OrderService,
    private _products: ProductsService
  ) {
    this.searchDefaultWarranty()
   }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any): void {
    let element = $event.target.scrollingElement
    let scrollOffset = element.scrollTop;
    let parentHeight = element.offsetHeight;
    let clientHeight = element.clientHeight;

    this.toggleResume = scrollOffset > 300 && !this.keepDown ? true : false;
    this.keepDown = scrollOffset == 0 ? false : this.keepDown

    // Listen the bottom
    //   scrollPosition: (scrollOffset + clientHeight),
    //   anchor: (parentHeight - clientHeight  * .25)
    this.toggleResume = (scrollOffset  + clientHeight) > (parentHeight - clientHeight * .25) ? true : this.toggleResume
  }


  searchDefaultWarranty() {
    this._products.currentProduct$.subscribe(product => {
      let warrantyInList = product.variables.find(v => v.name == 'warranty')
      if (warrantyInList) {
        this.warranty = warrantyInList.options[0].option
      }
    })
  }

  listenWarrantyOption() {

    let warrantySelected = this.order_.currentOrder.addons.find(a => a.name == 'warranty')
    if (warrantySelected) {
      this.warranty = warrantySelected.option.title
    }
    return this.warranty
  }

}
