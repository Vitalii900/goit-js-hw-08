import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
  // console.log(e.seconds);
}

function startAfterReload() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  const parcedTime = JSON.parse(currentTime);

  if (currentTime) {
    player.setCurrentTime(parcedTime);
  }
}

startAfterReload();

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
