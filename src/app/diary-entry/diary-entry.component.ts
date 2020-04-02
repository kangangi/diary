import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css']
})
export class DiaryEntryComponent implements OnInit {
  
  @Input() diary:Diary;
  @Output () isDelete = new EventEmitter<boolean>();

  entryDelete(fordelete:boolean){
    this.isDelete.emit(fordelete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
