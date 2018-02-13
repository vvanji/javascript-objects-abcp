function updatePlaylist(playlist, artist, song) {

  return Object.assign({}, playlist, { [artist]: song })
}

const playlist = { artist: 'Kesha', song: 'Praying'};

console.log(updatePlaylist(playlist, 'Lady Gaga', 'Million Reasons'));


playlist 

console.log(playlist);

