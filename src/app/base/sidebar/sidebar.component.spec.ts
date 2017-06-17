import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ],
            declarations: [SidebarComponent],
        });
        TestBed.compileComponents();
    });

    it('should create the sidebar', async(() => {
        const fixture = TestBed.createComponent(SidebarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});