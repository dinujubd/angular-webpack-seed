import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';
import { MdSidenav } from '@angular/material';
import { SidenavService } from '../sidenav/sidenav.service';


const changeDetectionKey = 'mdDemoChangeDetection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidenav')
  public sidenav: MdSidenav;

  dark = false;
  changeDetectionStrategy: string;
  navItems = [
    { name: 'Autocomplete', route: 'autocomplete' },
    { name: 'Button', route: 'button' }
  ];

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService, private _element: ElementRef,
    private sidenavService: SidenavService) {

    try {
      this.changeDetectionStrategy = window.localStorage.getItem(changeDetectionKey) || 'Default';
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    this.sidenavService
      .setSidenav(this.sidenav);
  }



  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }


  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleChangeDetection() {
    try {
      this.changeDetectionStrategy = this.changeDetectionStrategy === 'Default' ?
        'OnPush' : 'Default';
      window.localStorage.setItem(changeDetectionKey, this.changeDetectionStrategy);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  toggleSideNav() {

    debugger;
    this.sidenavService.toggle().then(() => { });
  }

}
