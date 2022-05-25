import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grid-child',
  templateUrl: './grid-child.component.html',
  styleUrls: ['./grid-child.component.css']
})
export class GridChildComponent {
  @Output() someEvent = new EventEmitter<void>();

  clickHandler() {
    this.someEvent.emit();
  }
}
