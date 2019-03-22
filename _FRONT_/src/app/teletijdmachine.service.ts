import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeletijdmachineService {
  public tekst:string = "";
  inUse;
  // susUse;
  
  constructor() { }
  

  teleporteer() {
    this.tekst = "Klaar voor teleportatie!";
    this.inUse = !this.inUse;
    // this.susUse = !this.susUse;

    alert(this.tekst);
    //check of teletijdsmachine in gebruik is
    
  }

  //Sigi's code//
  status;
  
  activate(){
    //alert("ZOEFFF !!!!!");
    this.status=true;
    setTimeout(()=>{this.status=false;},5000)
    return Math.random()*2100;
  }

}
