import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SidebarService } from './sidebar/sidebar.service';

@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [HeaderComponent, FooterComponent, SidebarComponent],
    providers: [SidebarService],
    bootstrap: [],
    exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class BaseModule { }
