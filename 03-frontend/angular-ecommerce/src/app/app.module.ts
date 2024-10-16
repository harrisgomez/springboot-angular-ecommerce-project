import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

// Define routes
// Order matters! Specific -> General
const routes: Routes = [
    { path: 'home', component: ProductListComponent },
    { path: 'checkout', component: CartListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    declarations: [AppComponent, ProductListComponent, CartListComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
    ],
    // provide ProductService to allow injection into other parts of the app
    providers: [ProductService],
    bootstrap: [AppComponent],
})
export class AppModule {}
