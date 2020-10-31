import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `

    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate >
    
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname">
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="req-error">
          Passenger name is required
        </div>
      </div>

      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
        <div *ngIf="id.errors?.required && id.dirty" class="req-error">
          Passenger ID is required
        </div>
      </div>

      <div>
        <label>
        Checked in:
          <input
            type="checkbox"
            name="checkedIn"
            [value]="false"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate">
      </div>

      <div>
        Laggage:
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{item.value}}
          <option>
        </select>
      </div>

      <button type="submit" [disabled]="form.invalid"> Update Passenger</button>
      
    </form>
  
  `
})

export class PassengerFormComponent {
  
  @Input() detail: Passenger;

  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: "none",
    value: "No baggage"
  },{
    key: "hand-only",
    value: "Hand baggage"
  },{
    key: "hold-only",
    value: "Hold baggage"
  },{
    key: "hand-hold",
    value: "Hand and Hold baggage"
  }];

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn){
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean){
    if(isValid){
      this.update.emit(passenger);
    }
  }

}