import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked, AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges, OnDestroy,
    OnInit,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';

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
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('servElement') element: { type: string, name: string, content: string }; // parent components can access this property due to the decorator
    @Input('name') name: string;

    constructor() {
        console.log("constructor called")
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges called")
        console.log(changes)
    }

    ngOnInit(): void {
        console.log("ngOnInit called")
    }

    ngDoCheck() {
        console.log("ngDoCheck called")
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit called")
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked called")
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit called")
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked called")
    }

    ngOnDestroy() {
        console.log("ngOnDestroy called")
    }
}
