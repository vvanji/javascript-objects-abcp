function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}

const playlist = { Kesha: 'Praying'};

console.log(updatePlaylist(playlist, ['Lady Gaga'], 'Million Reasons'));

playlist;
console.log(playlist);

