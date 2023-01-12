import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output('svCreated') serverCreated: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContentInput: ElementRef; // do not access this element to change its value through typescript, use string interpolation or property binding instead, for example

  constructor() { }

  /*
  * Angular components lifecycle:
  *
  * ngOnChanges(): Called after a bound input property changes
  * ngOnInit(): Called once the component is initialized
  * ngDoCheck(): Called during every change detection run
  * ngAfterContentInit(): Called after content (ng-content) has been projected into view
  * ngAfterContentChecked(): Called every time the projected content has been checked
  * ngAfterViewInit(): Called after the component's view (and child views) has been initialized
  * ngAfterViewChecked(): Called every time the view (and child views) have been checked
  * ngOnDestroy(): Called once the component is about to be destroyed
  * */

  ngOnInit(): void { // will run after the constructor
  }

  onAddServer(inputElement: HTMLInputElement) {
    this.serverCreated.emit({name: inputElement.value, content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(inputElement: HTMLInputElement) {
    this.blueprintCreated.emit({name: inputElement.value, content: this.serverContentInput.nativeElement.value});
  }
}
