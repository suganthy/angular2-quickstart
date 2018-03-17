import { Component } from '@angular/core'

@Component({
  selector: 'events-app',
  template: `<div>Hello {{ angular }}</div>`
})
export class EventsAppComponent {
	angular = "Angular 2 Quick Start";
}
