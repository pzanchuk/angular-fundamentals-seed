import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
  constructor(){}

  getPassengers(): Passenger[] {
    return [{
      id: 1,
      fullname: "Pavel",
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: "Olik",
      checkedIn: true,
      checkInDate: 149074200000,
      children: null
    }, {
      id: 3,
      fullname: "Diman",
      checkedIn: false,
      checkInDate: null,
      children: null
    }, {
      id: 4,
      fullname: "Oliver",
      checkedIn: true,
      checkInDate: 1497748000000,
      children: [{name: "Melissa", age: 12},{name: "Antony", age: 5}]
    }]
  }
}