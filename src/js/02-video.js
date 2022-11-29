import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
const parcedTime = JSON.parse(currentTime);

startAfterReload();

function getCurrentTime(e) {
  const seconds = e.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  // console.log(e.seconds);
}

function startAfterReload() {
  checkForFinishVideo();
  if (currentTime) {
    player.setCurrentTime(parcedTime);
  }
}

function checkForFinishVideo() {
  if (currentTime > 560) {
    localStorage.clear();
  }
}



player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
