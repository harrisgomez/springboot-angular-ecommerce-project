import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartListComponent } from './cart-list.component';

describe('CartListComponent', () => {
    let component: CartListComponent;
    let fixture: ComponentFixture<CartListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CartListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CartListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
