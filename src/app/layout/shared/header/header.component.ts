import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  displayMobileMenu = false;

  constructor() {
    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        routerLink: '/'
      },
      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/about'
      },
      {
        label: 'خدمات',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/service'
      },
      {
        label: 'پروژه ها',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/project'
      },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/contact'
      },
      {
        label: 'سفارش پروژه',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/request'
      }
    ];
  }

  ngOnInit(): void {
    $(function() {
      $(document).scroll(function() {
        let nav = $('#menu-navbar');
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
      });
    });
  }

  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }
}
