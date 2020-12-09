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
import { DepartmentComponent } from './layout/home/department/department.component';
import { ContactComponent } from './layout/home/contact/contact.component';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { FooterComponent } from './layout/shared/footer/footer.component';
import {BarComponent} from './layout/home/bar/bar.component';
import { WhyUsComponent } from './layout/home/why-us/why-us.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        HomeAboutComponent,
        ServicesComponent,
        ProductsComponent,
        FeaturesComponent,
        DepartmentComponent,
        TeamComponent,
        FooterComponent,
        ContactComponent,
        BarComponent,
        WhyUsComponent
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
