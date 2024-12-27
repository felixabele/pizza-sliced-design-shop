import { Component, computed, inject, Signal } from '@angular/core';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';
import { ProductFilterService } from '../../model/product-filter.service';

@Component({
  selector: 'feature-tags-filter',
  imports: [MatChipsModule],
  templateUrl: './tags-filter.component.html',
})
export class TagsFilterComponent {
  private readonly productFilterService = inject(ProductFilterService);
  public selectedTags = this.productFilterService.tagsFilter();

  public tags: Signal<string[]> = computed(() =>
    Array.from(
      new Set(this.productFilterService.allProducts().flatMap((p) => p.tags)),
    ),
  );

  public onTagSelected(event: MatChipSelectionChange, tag: string): void {
    if (event.selected) {
      this.productFilterService.addFilterTag(tag);
    } else {
      this.productFilterService.removeFilterTag(tag);
    }
  }
}
