import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../common/product';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private products: Product[] = [];
    private cartItemsSource = new BehaviorSubject<any[]>([]);

    currentCartItems = this.cartItemsSource.asObservable();

    constructor(private productService: ProductService) {
        this.initializeData();
    }

    private initializeData() {
        this.productService.getProductList().subscribe((data: Product[]) => {
            this.products = data;
        });
    }

    private findProductBySku(sku: string) {
        return this.products.find((item) => item.sku === sku);
    }

    addItem(sku: string) {
        const currentItems = this.cartItemsSource.value;
        const filteredItem = this.findProductBySku(sku);
        this.cartItemsSource.next([...currentItems, filteredItem]);
    }
}
