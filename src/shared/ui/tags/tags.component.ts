import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'shared-ui-tags',
  imports: [MatChipsModule],
  templateUrl: './tags.component.html',
})
export class TagsComponent {
  public readonly tags = input.required<string[]>();
}
