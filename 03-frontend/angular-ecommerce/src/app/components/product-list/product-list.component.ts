import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { SharedService } from '../../services/shared.service';

import { Product } from '../../common/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list-table.component.html',
    styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
    constructor(
        private productService: ProductService,
        private sharedService: SharedService
    ) {}

    // Properties can be accessed from view template
    products: Product[] = [];

    ngOnInit(): void {
        this.listProducts();
    }

    // Integrate this Component by subscribing to the Service
    // Subscribing executes in an async fashion
    // Assign results to products array
    listProducts() {
        this.productService.getProductList().subscribe((data) => {
            this.products = data;
        });
    }

    addToCart(sku: string) {
        this.sharedService.addItem(sku);
    }
}
