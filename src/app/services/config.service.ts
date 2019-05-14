import { Injectable } from '@angular/core';
export interface IConfig {
  alarmActivated: boolean;
  bedTime: string;
  wakeTime: string;
  lightActivated: boolean;
  lightAnticipation: number;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configurationSettings: IConfig;
 constructor() {
   console.log('Configuration Service Started');
   this.loadStorage();
  }
 loadStorage() {
   if (localStorage.getItem('config')) {
     this.configurationSettings = JSON.parse(localStorage.getItem('config'));
   }
 }
 setConfig(c: IConfig) {
   this.configurationSettings = c;
   this.saveOnLocalStorage();
 }
 saveOnLocalStorage() {
   localStorage.setItem('config', JSON.stringify(this.configurationSettings));
 }

 getConfig(): IConfig {
   return this.configurationSettings;
 }

}
