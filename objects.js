function updatePlaylist(playlist, artist, song) {

  return Object.assign({}, playlist, { [artist]: song })
  //return Object.assign(obj, { [key]: value })
}

const playlist = { artist: 'Kesha', song: 'Praying'};

console.log(updatePlaylist(playlist, 'Lady Gaga', 'Million Reasons'));
// returns `{ eggs: 3, chocolate: '1 cup' }`

playlist // { eggs: 3 }

console.log(playlist);
//console.log(updateObjectWithKeyAndValue);
