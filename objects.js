<<<<<<< HEAD
var playlist = {'artist': 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
=======
var playlist = {obj: "key"};

function updatePlaylist(obj, key, value) {
  return object.assign(obj, { [key]: value})
}

function removeFromPlaylist(obj, key);
  delete playlist.obj;
  return playlist;
>>>>>>> bee4d9881d819ab4f380fd219e8d6437decb09ae
