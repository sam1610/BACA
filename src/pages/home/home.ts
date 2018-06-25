import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider   }  from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
 events:any;
  constructor(public navCtrl: NavController, private rest:DataProvider) {
  }

  ngOnInit(){
    this.rest.getData().subscribe(
        data => this.events=data
    );
  }
}
