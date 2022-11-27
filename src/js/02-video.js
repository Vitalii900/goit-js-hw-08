const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (e) {
  // console.log(e.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));

  const currentTime = localStorage.getItem('videoplayer-current-time');
  const parcedTime = JSON.parse(currentTime);

  if (parcedTime) {
    // console.log(parcedTime);
  }
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
