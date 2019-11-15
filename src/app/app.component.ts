import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() edoValue: string = null;
  @Output() edoInput: EventEmitter<any> = new EventEmitter();

  onInput(event: any) {
    this.edoInput.emit(event);
  }
}
