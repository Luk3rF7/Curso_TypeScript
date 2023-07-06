//interface
interface VideoPlayElems {
  videoPlayer: HTMLVideoElement;
  playBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  initialEvent(): void;
}

export default class VideoPlay implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playBtn: HTMLButtonElement;
  private stopBtn: HTMLButtonElement;

  constructor(videoPlayElems: VideoPlayElems) {
    this.videoPlayer = videoPlayElems.videoPlayer;
    this.playBtn = videoPlayElems.playBtn;
    this.stopBtn = videoPlayElems.stopBtn;
  }
  initialEvent(): void {
    this.playBtn.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopBtn.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
    });
  }
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playBtn.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playBtn.innerText = 'Play';
    }
  }
  stop(): void {
    //
  }
}

const videoPlay = new VideoPlay({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playBtn: document.querySelector('.play') as HTMLButtonElement,
  stopBtn: document.querySelector('.stop') as HTMLButtonElement,
});
videoPlay.initialEvent();
