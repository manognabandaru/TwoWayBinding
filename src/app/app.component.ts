import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemCount: number;
  userid = 'id'; 
  name = 'name';
  technology = 'technology';
  useridlist =[];
  namelist =[];
  technologylist =[];
  custom;
  constructor(){}
  ngOnInit(){
    // this.itemCount=this.list.length;
  }
  // onChange(reference){
  //  this.useridlist.push(this.userid);
  //  this.namelist.push(this.name);
  //  this.technologylist.push(this.technology);
  //  this.userid='';
  //  this.name='';
  //  this.technology='';
  //  this.itemCount=this.list.length;

  // }
  onChange(val1, val2, val3): any{
    this.useridlist.push(val1);
    this.namelist.push(val2);
    this.technologylist.push(val3);
    this.userid='';
    this.name='';
    this.technology='';
    // this.itemCount=this.list.length;
 
   }
  //<!-- for template reference eg-->
  // customMethod(value: any) {
  //   this.custom = value;
  // }
}
