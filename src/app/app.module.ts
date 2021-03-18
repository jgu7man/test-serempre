import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './shared/firebase.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCarrouselComponent } from './components/product/product-carrousel/product-carrousel.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ProductFeaturesIconsComponent } from './components/product/product-features-icons/product-features-icons.component';
import { ProductOptionsComponent } from './components/product/product-options/product-options.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductResumeComponent } from './components/product/product-resume/product-resume.component';
import { ProductDescriptionComponent } from './components/product/product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductComponent,
    ProductCarrouselComponent,
    ProductInfoComponent,
    ProductFeaturesIconsComponent,
    ProductOptionsComponent,
    ProductDetailsComponent,
    ProductResumeComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FirebaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
