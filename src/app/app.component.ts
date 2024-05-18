import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>IF Blogları</h1>
    <button *ngIf="isActive == false" (click)="changeActiveStatus()">
      Aktif et
    </button>
    <br />
    <br />
    <button *ngIf="isActive == true" (click)="changeActiveStatus()">
      Passif et
    </button>
  `,
})
export class AppComponent {
  isActive: boolean = true;
  changeActiveStatus() {
    this.isActive = !this.isActive;
  }
}
