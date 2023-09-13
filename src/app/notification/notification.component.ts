import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success">
    <p>This web use cookies</p>
    </div>`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center; text-color: #fff}"]
})
export class NotificationComponent {

}
