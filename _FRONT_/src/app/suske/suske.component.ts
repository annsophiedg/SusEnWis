import { Component, OnInit } from '@angular/core';
import { TeletijdmachineService } from '../teletijdmachine.service';

@Component({
  selector: 'suske',
  templateUrl: './suske.component.html',
  styleUrls: ['./suske.component.css']
})
export class SuskeComponent implements OnInit {

  constructor(private ttmS: TeletijdmachineService) { };

  //SIGI
  jaar:number;


  ngOnInit() {
  }

}
