import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { BleConnDetailComponent } from './ble-conn-detail/ble-conn-detail.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab3Page },{ path: 'detail', component: BleConnDetailComponent }])
  ],
  declarations: [Tab3Page,BleConnDetailComponent]
})
export class Tab3PageModule {}
