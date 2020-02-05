import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { MessagingService } from '../_service/messaging.service';
import { Message } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  message: Message;


  constructor(
    private messagingService: MessagingService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.messagingService.currentMessage.subscribe((message) => {
      if (message) {
        this.message = message.notification;
        console.log('currendMsg', this.message);
        this.changeDetector.detectChanges();
        setTimeout(() => {
          this.message =  null;
          this.changeDetector.detectChanges();
        }, 2000);
      }
    });
  }

}
