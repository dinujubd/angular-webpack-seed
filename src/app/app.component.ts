import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService) { }


  ngOnInit() {
    // const onNavigationEnd = this.router.events.filter(event => event instanceof NavigationEnd);
    // Observable.merge(this.translateService.onLangChange, onNavigationEnd)
    //   .map(() => {
    //     let route = this.activatedRoute;
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   })
    //   .filter(route => route.outlet === 'primary')
    //   .mergeMap(route => route.data)
    //   .subscribe(event => {
    //     const title = event['title'];
    //     if (title) {
    //       this.titleService.setTitle(this.translateService.instant(title));
    //     }
    //   });
  }

}
