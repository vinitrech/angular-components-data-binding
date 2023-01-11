import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output('svCreated') serverCreated: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }
}
