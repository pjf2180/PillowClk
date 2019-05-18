import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Observable } from 'rxjs';

const exampleService = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
@Injectable({
  providedIn: 'root'
})
export class BleService {

  
  discoveredDevices:any[] = [];
  connectedPeripherals:any[] = [];
  scanning:boolean = false;
  statusMessage: string;
  constructor(private ble: BLE,private ngZone:NgZone) {
    // this.setStatus('No devices')
  }
  scan(){
    // this.setStatus('Scanning for Bluetooth LE Devices');
    this.discoveredDevices = [];
    this.ble.scan([exampleService],5).subscribe(
      device=>this.onDeviceDiscovered(device),
      error=>this.scanError(error),()=>this.scanning = false
    );
    //setTimeout(this.setStatus.bind(this),5000,'Scan complete'); 
  }
  connect(device: any): Observable<any>{
    this.setStatus('Connecting');
    return this.ble.connect((device.id));
  }
  
  onDeviceDiscovered(device) {
    this.ngZone.run(() => {
      this.discoveredDevices.push(device);
    });
  }
  scanError(error:any){

  }
  removeDiscovered(name: string){
    let i = 0;
    this.discoveredDevices.forEach((x)=>{
      if(x.name === name){
        this.discoveredDevices.splice(i,1);
      }
      i++;
    })
  }
  setStatus(status:string){
    this.statusMessage = status;
  }
  service1(){
    console.log('Ble service 1 executed');
  }
}
