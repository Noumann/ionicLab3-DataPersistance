import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import it here
import {Storage} from '@ionic/storage';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  myStatus:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }


  saveStatus(){
    console.log(this.myStatus);
    this.storage.set("Status",this.myStatus);
    this.navCtrl.pop();
  }

}
