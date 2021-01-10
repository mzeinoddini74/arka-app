import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ViewportScroller} from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  @Input('titleData') public title;
  items: MenuItem[];
  displayMobileMenu = false;

  constructor(private viewportScroller: ViewportScroller) {
    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: event => this.onClick('home-sec')
      },
      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('about-sec')
      },
      {
        label: 'خدمات',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('services-sec')
      },
      {
        label: 'پروژه ها',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('projects-sec')
      },
      {
        label: 'دپارتمان ها',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('departments-sec')
      },
      {
        label: 'تیم کاری',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('team-sec')
      },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('contact-sec')
      },
      {
        label: 'سفارش پروژه',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('')
      }
    ];
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    if (this.displayMobileMenu === true){
      this.displayMobileMenu = false;
    }
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
