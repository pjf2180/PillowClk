import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BleService {

  connectedPeripheral:any;
  devices:any[] = [];
  scanning:boolean = false;
  statusMessage: string;
  constructor(private ble: BLE,private ngZone:NgZone) {
    this.setStatus('No devices')
  }
  scan(){
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];
    this.ble.scan([],5).subscribe(
      device=>this.onDeviceDiscovered(device),
      error=>this.scanError(error),()=>this.scanning = false
    );
    //setTimeout(this.setStatus.bind(this),5000,'Scan complete'); 
  }
  connect(device: any): Observable<any>{
    return this.ble.connect((device.id));
  }
  onDeviceDiscovered(device) {
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }
  scanError(error:any){

  }
  setStatus(status:string){
    this.statusMessage = status;
  }
}
