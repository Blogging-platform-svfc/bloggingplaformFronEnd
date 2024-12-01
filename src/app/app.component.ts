import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'activity15';

  showHeader = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = event.url !== '/login' &&
          event.url !== '/signup' &&
          event.url !== '/newuser'&&
          event.url !== '/message'&&
          event.url !== '/prof'&&
          event.url !== '/notif'&&
          event.url !== '/video'&&
          event.url !== '/note' &&
          event.url !== '/friend'; // Hide header for /userhome
      }
    });
  }

}
