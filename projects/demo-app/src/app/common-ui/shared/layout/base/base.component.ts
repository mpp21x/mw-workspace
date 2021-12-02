import {Component, OnInit} from '@angular/core';
import {GlobalClickEventListener} from 'mw2021-library';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(readonly eventListener: GlobalClickEventListener) {
    eventListener.getSubject().subscribe((x) => console.log(x));
  }

  ngOnInit(): void {

  }

  onClick($event: MouseEvent): void {
    this.eventListener.getSubject().next($event);
  }
}
