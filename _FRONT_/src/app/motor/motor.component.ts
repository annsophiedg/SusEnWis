import { Component, Input } from '@angular/core';

@Component({
  selector: 'motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent {

  @Input() motorName;
  public status: string;


  constructor() {
    this.status = "OFF";
  }

  public startEngine() { this.status = "ON"; }
  public stopEngine() { this.status = "OFF"; }

}
