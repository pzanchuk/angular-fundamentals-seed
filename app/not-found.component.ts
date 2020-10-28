import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Ooops not found!, <a routerLink="/">go home</a>?
    </div>
  `
})

export class NotFoundComponent {}