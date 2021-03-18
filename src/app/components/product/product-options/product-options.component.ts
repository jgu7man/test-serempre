import { Component, Input, OnInit } from '@angular/core';
import { iProductOption, iProductVariable } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'gzm-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss']
})
export class ProductOptionsComponent implements OnInit {

  @Input() variable: iProductVariable
  @Input() default: number | null
  optionSelected: number | null = null

  constructor(
    public order_: OrderService,
  ) { }

  ngOnInit(): void {
    if(this.default !== null ) this.optionSelected = this.default
  }

  onSelectOption(index: number, name: string, option: iProductOption) {
    this.optionSelected = index
    this.order_.addOption(name, option)
  }

}
