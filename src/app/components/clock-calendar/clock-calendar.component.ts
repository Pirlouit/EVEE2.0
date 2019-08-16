import { Component, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock-calendar',
  templateUrl: './clock-calendar.component.html',
  styleUrls: ['./clock-calendar.component.css']
})
export class ClockCalendarComponent implements OnInit {

  clockTickInterval: any;
  now: any;

  @Output() date: string;
  @Output() hours: string;
  @Output() minutes: string;
  @Output() seconds: string;

  constructor() {
    moment.locale("fr");
    this.refreshClockCalendar();
   }

  ngOnInit() {
    this.clockTickInterval = setInterval(val => this.refreshClockCalendar(),1000);
  }

  refreshClockCalendar(){
    var now = moment();
    this.seconds = now.format("ss");
    this.minutes = now.format("mm");
    this.hours = now.format("HH");
    this.date = now.format("dddd, LL");    
  }

}
