import { Component, Input, OnInit } from '@angular/core';
import { iProductDetails } from 'src/app/models/product.model';

@Component({
  selector: 'gzm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() details: iProductDetails
  constructor() { }

  ngOnInit(): void {
  }

}
