import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

import { Bored } from '../../models/bored.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <div>{{bored?.activity}}</div>
      <passenger-count
        [items] = "passengers">
      </passenger-count>
      <passenger-detail
        *ngFor = "let passenger of passengers"
        [detail] = "passenger"
        (edit) = "handleEdit($event)"
        (remove) = "handleRemove($event)">
      </passenger-detail>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  bored: Bored;

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(){
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);

    this.passengerService
      .getBored().subscribe((data: Bored) =>{ this.bored = data;
        console.log(this.bored);
      });
    }

  handleRemove(event: Passenger){
    this.passengerService
      .deletePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleEdit(event: Passenger) { 
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) =>{
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if(passenger.id === data.id){
            passenger = Object.assign({},passenger,event);
          }
          return passenger;
        });
      });
  }
}