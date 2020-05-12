import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AlertModalComponent, ConfirmModalComponent, DatepickerPopupComponent],
    exports: [AlertModalComponent],
    entryComponents: [AlertModalComponent]
})
export class SharedModule { };