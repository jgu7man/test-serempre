import { Component, Input, OnInit } from '@angular/core';
import { iIconFeature, iProductDescription } from 'src/app/models/product.model';

@Component({
  selector: 'gzm-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {


  tabSelected: number = 0;
  content: string = ''
  @Input() iconFeatures: iIconFeature[] = []
  @Input() description: iProductDescription[] = []

  constructor() { }

  ngOnInit(): void {
    this.content = this.description[this.tabSelected].content
  }

  onSelectTab(tab: number): void {
    this.tabSelected = tab
    this.content = this.description[this.tabSelected].content
  }

  defineSelectorPosition() {
    return `${this.tabSelected * 33.333}%`
  }

}
