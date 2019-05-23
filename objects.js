var playlist = {
  artistName: "song title"
};

function updatePlaylist(playlist,artistName, songTitle)
{
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName)
{
  Object.assign({},playlist,{artistName});
  
  return playlist;
}