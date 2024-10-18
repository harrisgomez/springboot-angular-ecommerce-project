import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistEditorComponent } from './components/wishlist-editor/wishlist-editor.component';
import { WishlistDisplayComponent } from './components/wishlist-display/wishlist-display.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        CartListComponent,
        WishlistComponent,
        WishlistEditorComponent,
        WishlistDisplayComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    // provide ProductService to allow injection into other parts of the app
    providers: [ProductService],
    bootstrap: [AppComponent],
})
export class AppModule {}
