import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        CartListComponent,
        CartPreviewComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    // provide ProductService to allow injection into other parts of the app
    providers: [ProductService],
    bootstrap: [AppComponent],
})
export class AppModule {}
