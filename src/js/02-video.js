import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    console.log(currentTime);

    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
  }, 1000)
);

window.addEventListener('load', function () {
  const stopsCurrentTime = localStorage.getItem('videoplayer-current-time');

  if (stopsCurrentTime) {
    const currentTime = JSON.parse(stopsCurrentTime);
    player.setCurrentTime(currentTime);
  }
});
