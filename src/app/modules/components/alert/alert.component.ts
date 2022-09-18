import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {

  @Input() error : any;
  @Input() errorMsg: any;
  constructor() { }

  ngOnInit(): void {
  }

}
