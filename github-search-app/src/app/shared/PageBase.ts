import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export default abstract class PageBase implements OnDestroy {
    protected subscribtions = new Array<Subscription>();
    ngOnDestroy(): void {
        this.subscribtions.forEach(s => {
            s.unsubscribe();
        });
    }
}