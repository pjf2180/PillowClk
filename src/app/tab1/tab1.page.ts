import { Component, ViewChild, OnInit  } from '@angular/core';
import { IonDatetime, IonRange, IonLabel, IonToggle } from '@ionic/angular';
import { Time } from '@angular/common';
import { ConfigService, IConfig } from '../services/config.service';


interface ITickSpan {
  lower: number;
  upper: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  @ViewChild('wakeTimePicker') wakePicker: IonDatetime;
  @ViewChild('sleepTimePicker') sleepPicker: IonDatetime;
  @ViewChild('totalSleep') totalSleepLabel: IonLabel;

  config: IConfig;

  private perDaySleeping: Time = {'hours': 8, 'minutes': 0};
  private sleepTime = '';
  constructor(private configurationService: ConfigService) {
    // this.sleepTime =  new Date().toISOString();
    console.log('tab1 started');
    console.log(configurationService);
    this.config =  this.configurationService.getConfig();
  }
  ngOnInit() {


    this.sleepPicker.minuteValues = '0,5,10,15,20,25,30,35,40,45,50,55';
    this.wakePicker.minuteValues = this.sleepPicker.minuteValues;

    if (!this.config) {

    const defaultBedTime = new Date();
    defaultBedTime.setHours(21);
    defaultBedTime.setMinutes(30);
    const defaultWakeTime = new Date();
    defaultWakeTime.setHours(7);
    defaultWakeTime.setMinutes(30);

      this.config = {
        alarmActivated: true,
        bedTime: defaultBedTime.toISOString(),
        wakeTime: defaultWakeTime.toISOString(),
        lightActivated: true,
        lightAnticipation: 25
      };
      this.configurationService.setConfig(this.config);
    }


    this.sleepTime = this.getElapsedTimeString();

  }

  onKnobFocus() {
    console.log('will move');

  }
  switchedToggle(t: IonToggle) {
    this.configurationService.saveOnLocalStorage();
  }
  onTimePickerChanged() {
    console.log('timer picker changed');
    console.log(`BedTime: ${this.getMinutesElapsed(this.sleepPicker.value)}`);
    console.log(`WakeTime: ${this.getMinutesElapsed(this.wakePicker.value)}`);
    this.sleepTime = this.getElapsedTimeString();
    this.configurationService.saveOnLocalStorage();
  }
  getElapsedTimeString(): string {

    const bedMinutes: number = this.getMinutesElapsed(this.config.bedTime);
    const wakeMinutes: number = this.getMinutesElapsed(this.config.wakeTime);

    let minuteSpan: number;
    if (bedMinutes <= 720 && wakeMinutes <= 720) { //sleeping during morning
      minuteSpan = wakeMinutes - bedMinutes;
    } else if (bedMinutes > 720 && wakeMinutes > 720) { // sleeping afternoon 
      minuteSpan = wakeMinutes - bedMinutes;
    } else if (bedMinutes <= 720 && wakeMinutes > 720) {//sleeping morning-afternoon
      minuteSpan = (720 - bedMinutes) + (wakeMinutes - 720);
    } else if (bedMinutes > 720 && wakeMinutes <= 720) {//sleeping afternoon-morning
      minuteSpan = (1440 - bedMinutes) + wakeMinutes;
    }

    const hrs = Math.trunc(minuteSpan / 60 );
    const mins = minuteSpan % 60;

    return `${hrs} hrs ${mins} mins`;

  }
  getMinutesElapsed(isoDateString: string): number {
    const dte = new Date(isoDateString);
    const hrs = dte.getHours();
    const mins = dte.getMinutes();
    const totalMins = hrs * 60 + mins;
    return totalMins;
  }
  getIsoDate(sliderVal: number): string {
    const sliderValInMinutes = (5 * (sliderVal));// + 12 * 60;
    const hours =  Math.trunc((sliderValInMinutes) / 60) ;
    const minutes = (sliderValInMinutes  % 60) ;
    const newSleepTime = new Date();
    newSleepTime.setHours(hours);
    newSleepTime.setMinutes(minutes);

    return newSleepTime.toISOString();
  }

}
