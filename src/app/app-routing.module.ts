import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product/MOMENTUM-True-Wireless-2' },
  { path: 'product/:prodId', component: ProductComponent, children:[

  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
