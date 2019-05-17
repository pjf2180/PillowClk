import { Component, OnInit, NgZone } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { BleService } from 'src/app/services/ble.service';

@Component({
  selector: 'app-ble-conn-detail',
  templateUrl: './ble-conn-detail.component.html',
  styleUrls: ['./ble-conn-detail.component.scss'],
})
export class BleConnDetailComponent implements OnInit {

  constructor(private bleService: BleService) { 
    // let device = navParams.get('device');
    
  }

  ngOnInit() {}
  
}
