import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [],
  templateUrl: './my-table.html',
  styleUrl: './my-table.css'
})
export class MyTable {

  @Input() colArray: string[] = []
  @Input() gridData: any[] = [];
  @Input() needActionBtn: boolean = false;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  editRecord(data: any) {
    this.onEdit.emit(data)
  }
  deleteRecord(data: any) {
    this.onDelete.emit(data)
  }
}
