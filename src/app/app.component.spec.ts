import { TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

interface CyStyleSheet {
  selector(selector: string): CyStyleSheet;
  css(styles: Record<string, unknown>): CyStyleSheet;
}

interface CyGraph {
  on(...args: unknown[]): void;
  elements(): {
    addClass(name: string): void;
    removeClass(name: string): void;
  };
}

const styleSheet: CyStyleSheet = {
  selector: () => styleSheet,
  css: () => styleSheet
};

const cytoscape = Object.assign(
  (): CyGraph => ({
    on: () => undefined,
    elements: () => ({
      addClass: () => undefined,
      removeClass: () => undefined
    })
  }),
  { stylesheet: (): CyStyleSheet => styleSheet }
);

(globalThis as typeof globalThis & { cytoscape: typeof cytoscape }).cytoscape = cytoscape;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the application title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Events Graph');
  });

  it('should render the title in an h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Events Graph');
  });
});
