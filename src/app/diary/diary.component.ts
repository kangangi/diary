import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries: Diary[] = [
    new Diary('Tokyo', 'I am very annoying',new Date(2020,3,23)),
    new Diary('Helsi', 'I am teddy bear' ,new Date (2020,2,15))
  ]
  addNewEntry(diary){
    this.diaries.push(diary)
  }

  displayEntry(index) {
    this.diaries[index].showEntry = true;
  }
  deleteEntry(isDelete, index) {
    if (isDelete) {

      let toDelete = confirm('Are you sure you want to delete ${this.diaries[index].title} ?')
      if (toDelete) {
        this.diaries.splice(index, 1);

      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
