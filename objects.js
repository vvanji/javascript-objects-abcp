function updatePlaylist(playlist, artistName, songTitle) {

  //return Object.assign({}, playlist, { artistName: 'songTitle' })
  return Object.assign({}, playlist, { artistName: 'songTitle' })
}

const playlist = { artistName: 'songTitle'};

console.log(updatePlaylist(playlist, 'Lady Gaga', 'Million Reasons', 'Lady Gaga2', 'Million Reasons2'));
playlist;
