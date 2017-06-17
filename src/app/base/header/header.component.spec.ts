import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot()
            ],
            declarations: [HeaderComponent],
        });
        TestBed.compileComponents();
    });

    it('should create the header', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});