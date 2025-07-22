import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-editing',
  imports: [FormsModule],
  templateUrl: './inline-editing.html',
  styleUrl: './inline-editing.css'
})
export class InlineEditing implements OnInit {

  postList: any[] = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
      this.postList = res;
    })
  }
  onEdit(record: any) {
    this.removeEditable();
    record.isEditable= true;
  }

  onSave(item: any) {
    if(item.userId == '' || item.title == '' || item.body == '') {
      alert("Provide All Values")
    } else {
      console.log(item)
      //api call
    }
   
  }

  addNew() {
    this.removeEditable();
    const newObj = {
      "userId": "",
      "id": 0,
      "title": "",
      "body": "",
      isEditable: true
    };
    this.postList.unshift(newObj);
  }

  removeEditable() {
    this.postList.forEach(element => {
      element.isEditable = false;
    });
  }
  cancelRow(item: any) {
    if(item.id ==0) {
      this.postList.splice(0,1)
    }
    item.isEditable = false;
  }
}
