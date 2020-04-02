import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Diary} from '../diary'
import{NgForm} from '@angular/forms'


@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  newDiary = new Diary( "", "", new Date ());

  @Output() addEntry = new EventEmitter<Diary>();
  
  submitEntry(form:NgForm){
    this.addEntry.emit(this.newDiary)

    form.resetForm();
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
