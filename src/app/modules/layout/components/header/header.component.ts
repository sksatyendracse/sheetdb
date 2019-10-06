import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';


import { Subscription } from 'rxjs/Rx';

export interface IHeaderConfig {
  isHidden?: boolean;
}

export interface IRecognizedHeaderConfig {
  config: IHeaderConfig;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  public config: IHeaderConfig = {};
  public userName: string;
  public subscriberName: string;
  public messages: number = 0;
  public notifications: number = 0;

  private messagesSubscription: Subscription;
  private notificationsSubscription: Subscription;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.getNames();

    

    this.initCommunicationSubscribers();

    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
       
    });
  }

  ngOnDestroy() {
    this.destroySubscribers();
  }

  public toggleMenu(): void {
    
  }

  public logout(): void {
   
  }

  public goToHomePage(): void {
    
  }

  private getNames(): void {
    
  }

  private initCommunicationSubscribers(): void {
    
  }

  private destroySubscribers(): void {
    this.messagesSubscription && this.messagesSubscription.unsubscribe();
    this.notificationsSubscription && this.notificationsSubscription.unsubscribe();
  }

  
}
