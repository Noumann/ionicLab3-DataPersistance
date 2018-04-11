import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//new 
import {Storage} from '@ionic/storage';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

//new 
Status:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
//new function from here
  openStatus(){
    this.navCtrl.push("StatusPage")
  }

  ionViewWillEnter(){
    this.storage.get("Status").then((data)=>{
      this.Status=data;
    })
    .catch((err)=>{
      console.log("Database retrievel error")
    })
  }

}
