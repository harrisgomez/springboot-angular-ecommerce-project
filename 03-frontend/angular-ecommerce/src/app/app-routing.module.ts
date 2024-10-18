import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

// Define routes
// Order matters! Specific -> General
const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: 'checkout', component: CartListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
