import { Component } from '@angular/core';
import { Space } from '../spaces/domain/space';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  savedSpaces: Space[];

  constructor()
  {
  }

}
