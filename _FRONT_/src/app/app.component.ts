import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  //Sigi's code >>>-----
  // public toonopscherm:any;
  // public bla:string = "initiële waardeloos";
  public title:string = 'the adventures of Seuss and Wheez';
  // public footer:string = 'Halleluia, hallo!';
  public motors = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"];

  // constructor(private http: HttpClient) {
  //   // this.http.get('http://localhost:2105/student').subscribe((resultaat)=>{this.toonopscherm = resultaat})
  // }

  // sayHello() { console.log("nu wel hallo...") }
  // checker() { alert(this.bla) }
  // dosomething(x) { this.bla = x }
  //-----------------<<<

}
