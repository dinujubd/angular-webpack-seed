import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { MdSidenav } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { SidebarService } from './sidebar.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, OnDestroy {
    watcher: Subscription;
    activeMediaQuery = '';
    private isMobile: Boolean = false;
    @ViewChild('sidenav') private sidenav: MdSidenav;
    constructor(private media: ObservableMedia, private router: Router,
        private activatedRoute: ActivatedRoute,
        private sidenavService: SidebarService) {
        this.watcher = media.subscribe((change: MediaChange) => {
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
            if (change.mqAlias === 'xs') {
                this.loadMobileContent();
            } else {
                this.isMobile = false;
            }
        });


    }

    loadMobileContent() {
        // Do something special since the viewport is currently
        // using mobile display sizes
        this.isMobile = true;
    }

    ngOnDestroy() {
        this.watcher.unsubscribe();
    }



    ngOnInit() {
        this.sidenavService
            .setSidenav(this.sidenav);
    }
}