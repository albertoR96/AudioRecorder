import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Injectable({
  providedIn: 'root'
})
export class RecorderService {
  private media: Media;
  private mediaObject: MediaObject;

  constructor() { }

  startRecording(filePath: string): void {
    this.media = new Media();
    this.mediaObject = this.media.create(filePath);
    this.mediaObject.startRecord();
  }

  stopRecording(): void {
    this.mediaObject.stopRecord();
  }

}
