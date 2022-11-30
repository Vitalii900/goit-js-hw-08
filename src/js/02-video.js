import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
const parcedTime = JSON.parse(currentTime);

startAfterReload();

function getCurrentTime(e) {
  const seconds = e.seconds;
  const duration = e.duration;
  if (seconds === duration) {
    localStorage.clear();
    return;
  }
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  // console.log(e.seconds);
}

function startAfterReload() {
  if (currentTime) {
    player.setCurrentTime(parcedTime);
  }
}



player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
