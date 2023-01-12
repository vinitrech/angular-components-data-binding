import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // default encapsulation: angular encapsulate each component
  // with their own unique attributes (using View Encapsulation), so it can encapsulate
  // styles to just this component

  // the None mode disables encapsulation, therefore if we style an
  // element with the css file of this component, it will be applied globally

  // the Shadow DOM is an inside DOM that contains styling and scripts for the component
})
export class ServerElementComponent implements OnInit {
  @Input('servElement') element: {type: string, name: string, content: string}; // parent components can access this property due to the decorator

  constructor() { }

  ngOnInit(): void {
  }

}
