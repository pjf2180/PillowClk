import { Component } from '@angular/core';
import { ConfigService , IConfig} from '../services/config.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  config: IConfig;
  constructor(private configurationService: ConfigService) {
    this.config = configurationService.getConfig();
  }
  ligthToggl() {
    this.configurationService.saveOnLocalStorage();
  }

}
