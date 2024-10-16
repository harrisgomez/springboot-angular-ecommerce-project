import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';

// Define routes
// Order matters! Specific -> General
const routes: Routes = [
  // { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // provide ProductService to allow injection into other parts of the app
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
