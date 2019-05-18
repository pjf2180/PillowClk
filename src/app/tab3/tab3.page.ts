import { Component, NgZone } from '@angular/core';
import { BleService } from '../services/ble.service';
import { Router } from '@angular/router';
import { NavParams, NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
  constructor(private bleService:BleService,private nacCtrl:NavController,private router:Router,private ngZone:NgZone){
    
    
  }
  deviceSelected(idx:number){

    this.bleService.setStatus('Connecting to '+this.bleService.discoveredDevices[idx].name);
    this.bleService.connect((this.bleService.discoveredDevices[idx])).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );
    //this.router.navigate(['tabs/tab3/detail']);

  }
  onConnected(peripheral:any){
    this.ngZone.run(()=>{
      this.bleService.setStatus('Connected');
      this.bleService.connectedPeripherals.push(peripheral);
      this.bleService.removeDiscovered(peripheral.name);
    });
    
  }
  onDeviceDisconnected(peripheral:any){
    this.ngZone.run(()=>{
      this.bleService.setStatus(`${peripheral.name} disconnected`);
      const idx = this.bleService.connectedPeripherals.indexOf(peripheral);
      this.bleService.connectedPeripherals.splice(idx,1);
    });
  }

  
}
