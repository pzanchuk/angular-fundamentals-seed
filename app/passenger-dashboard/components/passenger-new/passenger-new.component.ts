import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

import { Baggage } from '../../models/baggage.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
  selector: 'passenger-new',
  styleUrls: ['passenger-new.component.scss'],
  template: `
    <div>
      <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>

        <div>
          Passenger name:
          <input
            type="text"
            name="fullname"
            required
            [ngModel]="fullname">
            <div *ngIf="fullname?.errors.required && fullname?.dirty" class="req-error">
            Passenger name is required
          </div>
        </div>

        <div>
          Passenger ID:
          <input
            type="number"
            name="id"
            required
            [ngModel]="id">
        </div>

        <div>
          <label>
          Checked in:
            <input
              type="checkbox"
              name="checkedIn"
              [value]="false"
              [ngModel]="checkedIn"
              (ngModelChange)="toggleCheckIn($event)">
          </label>
        </div>

        <div *ngIf="form.value.checkedIn">
          Check in date:
          <input type="number" name="checkInDate" [ngModel]="date">
        </div>

        <div>
          Laggage:
          <select
            name="baggage"
            [ngModel]>
            <option
              *ngFor="let item of baggage"
              [value]="item.key">
              {{item.value}}
            <option>
          </select>
        </div>

        <button type="submit" [disabled]="form.invalid">Create Passenger</button>
    
      </form>
     
    </div>
  `
})

export class PassengerNewComponent {

  constructor(private passengerService: PassengerDashboardService ) {

  }

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

  date: number;

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn){
      this.date = Date.now();
      console.log(this.date);
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean){
    if(isValid){
      this.passengerService
        .createPassenger(passenger)
        .subscribe();
    }
  }

}