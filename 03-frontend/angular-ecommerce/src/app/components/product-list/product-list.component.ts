import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list-table.component.html',
    styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
    // Properties can be accessed from view template
    products: Product[] = [];

    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

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
}
