import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  template: `
    <div class="pass-count">
      <h3>Airline Passengers</h3>
      <div>
        Total Checked-in: {{ checkedInCount() }}/{{ items.length }}
      </div>
    </div>
  `
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkedInCount(): number {
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}