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
  @ViewChild('serverContent', {static: true}) serverContentInput: ElementRef; // do not access this element to change its value through typescript, use string interpolation or property binding instead, for example

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputElement: HTMLInputElement) {
    this.serverCreated.emit({name: inputElement.value, content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(inputElement: HTMLInputElement) {
    this.blueprintCreated.emit({name: inputElement.value, content: this.serverContentInput.nativeElement.value});
  }
}
