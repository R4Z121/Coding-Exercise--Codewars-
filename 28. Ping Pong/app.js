// Kata source : https://www.codewars.com/kata/5ea39ab1d8425e0029fcd035

const pingPong = sounds => {
  const soundsArr = sounds.split('-');
  const point = {
    'pong': 0,
    'ping': 0
  }
  let playerService = soundsArr[0];
  let playerHitBadShot = 'none';
  
  soundsArr.forEach((sound,idx) => {
    if(sound != 'ping' && sound != 'pong') {
      if(soundsArr[idx-1] == 'ping' || soundsArr[idx-1] == 'pong') {
        playerHitBadShot = soundsArr[idx-1] == 'ping' ? 'ping' : 'pong';
        if(playerService != playerHitBadShot) {
            point[playerService]++;
        }
      }
    } else {
      playerService = (soundsArr[idx-1] != 'ping' && soundsArr[idx-1] != 'pong') ? sound : playerService;
    }
  });
  return point['ping'] > point['pong'] ? 'ping' : (point['ping'] == point['pong'] ? (playerHitBadShot == 'ping' ? 'pong' : 'ping') : 'pong');
}