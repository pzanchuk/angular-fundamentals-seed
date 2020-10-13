import { Component } from '@angular/core';

import { Passenger } from '../../models/passenget.interface';


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h2>Airline Passengers</h2>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
            {{i+1}}: {{passenger.fullname | uppercase}}
          <div class="date">
            Check in date: {{passenger.checkInDate ? (passenger.checkInDate | date: "yMMMMd") : 'Not checked-in.'}}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})

export class PassengerDashboardComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: "Pavel",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: "Olik",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 3,
    fullname: "Diman",
    checkedIn: false,
    checkInDate: null,
    children: null
  }, {
    id: 3,
    fullname: "Oliver",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{name: "Melissa", age: 12},{name: "Antony", age: 5}]
  }]
}