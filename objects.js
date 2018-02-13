function updatePlaylist(playlist, artistName, songTitle) {

  //return Object.assign({}, playlist, { artistName: 'songTitle' })
  return Object.assign({}, playlist, { artistName: 'songTitle' })
}

const playlist = { Lady Gaga: 'Million Reasons'};

console.log(updatePlaylist(playlist, 'Lady Gaga', 'Reasons'));
playlist;
