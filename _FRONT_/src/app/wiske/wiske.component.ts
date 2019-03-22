import { Component, OnInit } from '@angular/core';
import { TeletijdmachineService } from '../teletijdmachine.service';

@Component({
  selector: 'wiske',
  templateUrl: './wiske.component.html',
  styleUrls: ['./wiske.component.css']
})
export class WiskeComponent implements OnInit {

  constructor(private teletijdmachineService: TeletijdmachineService) { };

  // gebruikTeletijdmachine() {
  //   if ( susUse ) { tekst = "Suske gebruikt de teletijdmachine" }
  //   else { this.wisUse = !this.wisUse }
  // }

  jaar: Number;

  ngOnInit() {
  }

}
