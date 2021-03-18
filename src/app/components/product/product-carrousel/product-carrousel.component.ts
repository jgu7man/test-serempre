import { Component, Input, OnInit } from '@angular/core';
import { iIconFeature, iProductImage } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'gzm-product-carrousel',
  templateUrl: './product-carrousel.component.html',
  styleUrls: ['./product-carrousel.component.scss']
})
export class ProductCarrouselComponent implements OnInit {

  imageSelected: number = 0
  @Input() productImages: iProductImage[] = []
  @Input() iconFeatures: iIconFeature[] = []

  constructor(
  ) { }

  ngOnInit(): void {
  }

  selectImage(index) {
    this.imageSelected = index
  }


}

