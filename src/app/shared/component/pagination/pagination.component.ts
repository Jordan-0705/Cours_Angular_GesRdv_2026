import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input ({required:true}) pages: number[] = [];
  // @Input ({required:true}) itemsPerPage: number = 10;
  @Input ({required:true}) currentPage: number = 1;
  @Output () pageChange: EventEmitter<number> = new EventEmitter<number>()

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.pages.length){
      this.pageChange.emit(page)
    }
  }

  get desactivePrecedent(): boolean {
    return !(this.currentPage > 1);
  }

  get desactiveSuivant(): boolean {
    return !(this.currentPage < this.pages.length);
  }
}
