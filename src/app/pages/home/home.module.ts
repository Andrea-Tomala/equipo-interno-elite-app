import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { DigimonsService } from 'src/app/services/digimons.service';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule.forRoot({innerHTMLTemplatesEnabled:true}),
    HttpClientModule
  ],
  providers:[DigimonsService]
})
export class HomeModule { }
