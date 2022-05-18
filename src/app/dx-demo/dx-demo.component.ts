import { ChangeDetectionStrategy, Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-dx-demo',
  templateUrl: './dx-demo.component.html',
  styleUrls: ['./dx-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DxDemoComponent {
  items: any;

  constructor() {
    this.items = [
      { text: 'Download' },
      { text: 'Comment' },
      { text: 'Favorite' },
    ];
  }

  itemClick($event: any) {
    console.log($event);
    // if (!$event.itemData.items) {
    //   notify(`The "${$event.itemData.text}" item was clicked`, 'success', 1500);
    // }
  }
}
