import { Component, OnChanges, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';



@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div class="pass-detail">
      <span
        class="status"
        [class.checked-in]="detail.checkedIn">
      </span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{detail.fullname}}
      </div>

        
      <div class="date">
        Check in date: {{detail.checkInDate ? (detail.checkInDate | date: "yMMMMd") : 'Not checked-in.'}}
      </div>

      <button (click)="toggleEdit()">{{editing ? "Done" : "Edit"}}</button>
      <button (click)="onRemove()">Remove</button>
      <button (click)="goToPassenger()">View</button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges{
  
  @Input() detail: Passenger;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  ngOnChanges(changes){
    if(changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string){
    this.detail.fullname = value;    
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }

  goToPassenger(){
    this.view.emit(this.detail);
  }

}