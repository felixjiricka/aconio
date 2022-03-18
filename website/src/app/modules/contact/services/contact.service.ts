import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ContactModel} from '../../../core/datastructures/contact.model';
import {Observable, of} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    constructor(private http: HttpClient) {}

    send(data: ContactModel): Observable<number> {
        return this.http
            .post(`${environment.apiBase}/handleContactRequest`, data, {observe: 'response'})
            .pipe(map((val: HttpResponse<any>) => val.status));
    }
}
