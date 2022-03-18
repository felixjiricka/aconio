import {Component, OnInit} from '@angular/core';
import {ContactService} from './services/contact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as _ from 'lodash';
import {ContactModel} from '../../core/datastructures/contact.model';

@Component({
    selector: 'aconio-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    pendingRequest = false;
    isSuccess = false;
    isError = false;

    contactForm: FormGroup;
    constructor(private contactService: ContactService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            company: ['', []],
            phone: ['', []],
            email: ['', [Validators.email, Validators.required]],
            message: ['', [Validators.required]],
            dsgvo: [false, [Validators.requiredTrue]]
        });
    }

    submit(): void {
        this.isSuccess = this.isError = false;
        this.contactForm.markAllAsTouched();
        this.contactForm.markAsDirty();

        if (this.contactForm.valid) {
            this.pendingRequest = true;
            const value = this.contactForm.value;
            const formData = _.omit(value, ['dsgvo']) as ContactModel;
            console.log(formData);
            this.contactService.send(formData)
                .subscribe((status: number) => {
                    this.pendingRequest = false;
                    if (status === 200) {
                        this.isSuccess = true;
                        this.contactForm.reset();
                    } else {
                        this.isError = true;
                    }
                });
        } else {
            console.log(this.contactForm.errors);
        }
    }
}
