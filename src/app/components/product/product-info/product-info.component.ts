import { Component, OnInit, Input } from '@angular/core';
import { iProductInfo } from 'src/app/models/product.model';

@Component({
  selector: 'gzm-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  isNew: boolean = true;
  @Input() product: iProductInfo

  constructor() { }

  ngOnInit(): void {
  }

}
