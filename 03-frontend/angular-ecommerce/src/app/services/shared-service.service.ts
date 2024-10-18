import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedServiceService {
    private valueSource = new BehaviorSubject<string | null>(null);
    
    currentValue = this.valueSource.asObservable();
    
    constructor() {}
}
