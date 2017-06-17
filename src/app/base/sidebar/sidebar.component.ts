import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { SidebarService } from './sidebar.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private sidenavService: SidebarService) { }


    @ViewChild('sidenav') private sidenav: MdSidenav;

    navItems = [
        { name: 'Autocomplete', route: 'autocomplete' },
        { name: 'Button', route: 'button' },
        { name: 'Button Toggle', route: 'button-toggle' },
    ];

    ngOnInit() {
        this.sidenavService
            .setSidenav(this.sidenav);
    }

}