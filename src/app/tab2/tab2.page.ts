import { Component, Input } from '@angular/core';
import { ConfigService , IConfig} from '../services/config.service';
import { BleService } from '../services/ble.service';
import { pillowService, ligth_act_UUID, lba_UUID } from '../services/ble.services.const';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  config: IConfig;
  constructor(private configurationService: ConfigService,private bleService:BleService) {
    this.config = configurationService.getConfig();
  }
  saveConfig() {

    //send message to controller via bluetooth
    this.configurationService.saveOnLocalStorage();
  }

  lightAnticipation() {
    console.log(this.config.lightAnticipation);
    this.bleService.writeService(pillowService, lba_UUID, [this.config.lightAnticipation]);
    this.configurationService.saveOnLocalStorage();
  }
  deactivateLight(){
    console.log(`light: ${this.config.lightActivated}`);
    //this.bleService.writeService(pillowService,ligth_act_UUID,(this.config.lightActivated ? 'on': 'off'));
  }

}
