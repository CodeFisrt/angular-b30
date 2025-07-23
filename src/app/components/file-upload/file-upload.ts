import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  imports: [FormsModule,JsonPipe],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class FileUpload implements OnInit {

  roleList: any[]=[];
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((Res: any)=>{
      this.roleList  = Res.data;
    })
  }
 
  onSaveRoles() {
     this.http.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateBulkRoles",this.roleList).subscribe((Res: any)=>{
      this.roleList  = Res.data;
    })
  }

  addNew() {
    const newObj ={
      "roleId": 0,
      "role": "asas"
    };
    this.roleList.unshift(newObj)
  }

  onFileChange(event:any) {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    this.http.post("https://motopartz.gerasim.in/api/FileUpload/upload", formData).subscribe((res:any)=>{
      alert("File uploaded success")
    })

  }

}
