import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';

interface MenuItem {
  name: string;
  icon?: string;
  url?: string;
  isTitle?: boolean;
  level?: string;
  isAvailable?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { name: 'Dashboards', icon: 'dashboard.svg', url: '/dashboard', level: 'supervisor' },
    { name: 'Observations', icon: 'shield.svg', url: '/dashboard/condition-table', level: 'supervisor' },
    { name: 'Communications', icon: 'communications.svg', url: '/communications-list', level: 'worker' },
    { name: 'Site Management', icon: 'location.svg', url: '/site-management', level: 'admin' },
    { name: 'Reporting', icon: 'reporting.svg', url: '/reporting', level: 'reporting' },
    { name: 'Company Settings', isTitle: true, level: 'admin' },
    { name: 'Observation Categories', icon: 'icon_category.svg', url: '/management/observation-categories', level: 'admin' },
    { name: 'Coaching Opportunity Categories', icon: 'icon_category.svg', url: '/management/coaching-opportunity-categories', level: 'admin' },
    { name: 'Quality Observation Categories', icon: 'icon_category.svg', url: '/management/quality-observation-categories', level: 'admin' },
    { name: 'Thumbs-Up Categories', icon: 'icon_category.svg', url: '/management/thumbs-up-categories', level: 'admin' },
    { name: 'Notification Rules', icon: 'icon_notification_rules.svg', url: '/management/notification-rules', level: 'admin' },
    { name: 'Users', icon: 'user.svg', url: '/management/users' , level: 'admin'},
    { name: 'Teams', icon: 'icon_role.svg', url: '/management/teams', level: 'admin' },
    { name: 'Roles', icon: 'icon_role.svg', url: '/management/roles', level: 'admin' },
    { name: 'Certifications', icon: 'certifications.svg', url: '/management/certifications', level: 'admin' },
    { name: 'PPE', icon: 'ppe.svg', url: '/management/gear-list', level: 'admin' },
    { name: 'Settings', icon: 'settings.svg', url: '/subscriber/settings', level: 'admin' },
    { name: 'About Corvex', icon: 'about.svg', url: '/', level: 'worker' }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  public permissionHandler() {
    
  }



  public onClickMenuItem(item: MenuItem): void {
    if (_.isUndefined(item.isTitle)) {
      this.router.navigate([item.url], {replaceUrl: true});
    }
  }

  public isActive(menuItem: MenuItem): boolean {
    return menuItem.url !== '/' && this.router.isActive(menuItem.url, false);
  }

}
