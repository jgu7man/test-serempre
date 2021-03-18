import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { iProductInfo } from 'src/app/models/product.model';
import { SEOCONFIG, SeoService } from 'src/app/services/gdev-seo.service';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private productId: string = ''
  public product: Observable<iProductInfo>
  toggleFixed:boolean = false
  constructor(
    private _route: ActivatedRoute,
    private _products: ProductsService,
    private _seo: SeoService,
    private _title: Title
  ) {
    // Escucha los cambios de la ruta para obtener el id del producto
    this._route.params.subscribe( params => {
        this.productId = params['prodId']
        this.product = this._products.getProduct(this.productId)
      })
   }

  ngOnInit(): void {
    // Escucha los cambios del producto cargado para definir datos para el SEO
    this._products.currentProduct$.subscribe(product => {
      // this._title.setTitle(`Serempre - ${product.title}`)
      let seo_config: SEOCONFIG = {
        title: `Serempre - ${product.title}`,
        description: product.shortDescription,
        image: product.images[0].src,
        slug: product.id
      }
      this._seo.generarTags(seo_config)
    })
  }


  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    let element = $event.target.scrollingElement
    let scrollOffset = element.scrollTop;
    console.log(scrollOffset)
    this.toggleFixed = scrollOffset > 100 ? true : false

  }

}
