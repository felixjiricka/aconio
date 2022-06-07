import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export enum HeaderMode {
    DARK = 'dark',
    LIGHT = 'light'
}

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    constructor() {
    }

    themeChange = new Subject<HeaderMode>();

    update(mode: HeaderMode): void {
        this.themeChange.next(mode);
    }
}
