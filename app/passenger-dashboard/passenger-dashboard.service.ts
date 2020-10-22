import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { Passenger } from './models/passenger.interface';
import { Bored } from './models/bored.interface';

const PASSENGER_API: string = "api/passengers";
const BORED = "http://www.boredapi.com/api/activity/";

@Injectable()
export class PassengerDashboardService {

  constructor(private http: Http){}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json()); 
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json()); 
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json()); 
  }

  getBored(): Observable<Bored>{
    return this.http.get(BORED).map((response: Response) => response.json());
  }
}