import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/shared/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeAboutComponent } from './layout/home/home-about/home-about.component';
import { ServicesComponent } from './layout/home/services/services.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './layout/home/products/products.component';
import { FeaturesComponent } from './layout/home/features/features.component';
import { TeamComponent } from './layout/home/team/team.component';
import { BarComponent } from './layout/home/bar/bar.component';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { HomeProjectComponent } from './layout/home/home-project/home-project.component';
import { FooterComponent } from './layout/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeAboutComponent,
    ServicesComponent,
    ProductsComponent,
    FeaturesComponent,
    BarComponent,
    TeamComponent,
    HomeProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    PanelMenuModule,
    SidebarModule,
    MatCardModule,
    SharedModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
