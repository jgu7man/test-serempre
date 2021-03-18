import { Component, Input, OnInit } from '@angular/core';
import { iIconFeature } from 'src/app/models/product.model';

@Component({
  selector: 'gzm-product-features-icons',
  templateUrl: './product-features-icons.component.html',
  styleUrls: ['./product-features-icons.component.scss']
})
export class ProductFeaturesIconsComponent implements OnInit {

  @Input() features: iIconFeature[]

  constructor() { }

  ngOnInit(): void {
  }

}
