import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('servElement') element: {type: string, name: string, content: string}; // parent components can access this property due to the decorator

  constructor() { }

  ngOnInit(): void {
  }

}
