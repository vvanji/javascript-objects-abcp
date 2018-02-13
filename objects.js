function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}

const playlist = { artistName: 'Kesha', songTitle: 'Praying'};

console.log(updatePlaylist(playlist, ['Lady Gaga'], 'Million Reasons'));

playlist;
console.log(playlist);

