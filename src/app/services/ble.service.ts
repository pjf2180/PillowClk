import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Observable } from 'rxjs';
import { pillowService } from './ble.services.const';


@Injectable({
  providedIn: 'root'
})
export class BleService {

  
  discoveredDevices:any[] = [];
  connectedPeripherals:any[] = [];
  scanning:boolean = false;
  statusMessage: string = 'Initial Status';
  constructor(private ble: BLE,private ngZone:NgZone) {
    // this.setStatus('No devices')
  }
  scan(){
    // this.setStatus('Scanning for Bluetooth LE Devices');
    this.discoveredDevices = [];
    this.ble.scan([pillowService],5).subscribe(
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
  writeService(serviceUUID:string,serviceCharacteristic:string,value:number[]){
    console.log(`Ble service ${serviceUUID}  executed`);
    const deviceId = this.connectedPeripherals[0].id;

    let buffer = new Uint8Array(value).buffer;
    // let buffer = this.toUint8Array(value);
    this.ble.write(deviceId,serviceUUID,serviceCharacteristic,buffer).then(
      ()=>{ this.setStatus(`value: ${value} written to characteristic: ${serviceCharacteristic} service: ${serviceUUID}`)},
      e => {}
    );
  } 
  toUint8Array(str:string){
    const arr = str.split('');
    let cCodes: number[] = [];
    arr.forEach( c => {
      cCodes.push(c.charCodeAt(0));
    });
    let buffer = new Uint8Array(cCodes).buffer;
    return buffer;
  }
} 
