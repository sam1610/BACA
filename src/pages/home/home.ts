import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider   }  from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private rest:DataProvider) {
  }

  ngOnInit(){

  }
}
