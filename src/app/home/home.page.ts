import { Component } from '@angular/core';
import { RecorderService } from '../recorder.service';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private recorder: RecorderService;
  constructor() { }


  startRecording() : void {
    let file = new File();
    this.recorder = new RecorderService();
    this.recorder.startRecording(file.externalRootDirectory+'/'+this.getNewFileName()+'.mp3');
  }

  stopRecording(): void {
    this.recorder.stopRecording();
    console.log('Grabacion detenida');
  }

  getNewFileName() : string {
    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth() + 1) > 9 ? `${dateObj.getMonth() + 1}` : `0${dateObj.getMonth() + 1}`;
    let day = dateObj.getDate() > 9 ? `${dateObj.getDate()}` : `0${dateObj.getDate()}`;
    let hours = dateObj.getHours() > 9 ? `${dateObj.getHours()}` : `0${dateObj.getHours()}`;
    let minutes = dateObj.getMinutes() > 9 ? `${dateObj.getMinutes()}` : `0${dateObj.getMinutes()}`;
    let seconds = dateObj.getSeconds() > 9 ? `${dateObj.getSeconds()}` : `0${dateObj.getSeconds()}`;
    return 'AR'+year+month+day+hours+minutes+seconds;
  }

}
