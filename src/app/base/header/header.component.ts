import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdSidenav } from '@angular/material';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private sidenavService: SidebarService) { }

    public toggleSidenav() {
        this.sidenavService
            .toggle()
            .then(() => { });
    }

    ngOnInit() {

    }

}
