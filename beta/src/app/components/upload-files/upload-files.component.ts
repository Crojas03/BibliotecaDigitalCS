import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'upload/prueba.pdf';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
  }
}
