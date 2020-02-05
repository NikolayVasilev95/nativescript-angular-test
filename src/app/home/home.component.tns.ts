import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import * as firebase from 'nativescript-plugin-firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  title = 'teamandwin';

  messageTitle: String = null;
  messageBody: String = null;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    firebase.init({
      showNotifications: true,
      showNotificationsWhenInForeground: true,

      onPushTokenReceivedCallback: (token) => {
        console.log('[Firebase] onPushTokenReceivedCallback:', { token });
      },

      onMessageReceivedCallback: (message: firebase.Message) => {
        console.log('[Firebase] onMessageReceivedCallback:', JSON.stringify(message));
        if (message.foreground === false) {
          this.messageTitle = null;
          this.messageBody = null;
          console.log('Message received when app was closed');
          console.log('currentMsg: { Title: ', this.messageTitle, ', Body: ', this.messageBody, ' }');
        }
        if (message.foreground === true) {
          console.log('Message received when inside the app');
          this.messageTitle = message.title;
          this.messageBody = message.body;
          console.log('currentMsg: { Title: ', this.messageTitle, ', Body: ', this.messageBody, ' }');
          this.changeDetector.detectChanges();
         }
      }
    })
      .then(() => {
        console.log('[Firebase] Initialized');
      })
      .catch(error => {
        console.log('[Firebase] Initialize', { error });
      });
  }

}
