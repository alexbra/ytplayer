import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { VIDEOS } from '../../data/mock-video';
@Injectable()
export class VideoService {
  getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

  getTopVideos() {
    return this.getVideos()
            .then(
              (videos) => videos = videos.filter(v => v.top === true)
            );
  }
}
