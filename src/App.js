import './App.css';
import Login from './Login'
import {useEffect, useState} from 'react'
import {getTokenFromResponse} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import {useDataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();
  let active_playlist;
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = "";
    const _token =  hash.access_token;
    console.log(_token)
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        console.log(user)
        dispatch({
          type: "SET_USER",
          user
        })

      })
      spotify.getUserPlaylists().then((playlists) =>{
        var activeItem = playlists.items[playlists.items.length-1]
        var active=activeItem?.uri?.split(":")[2]
        spotify.getPlaylist(active).then((resp)=>{
          dispatch({
                  type: "SET_CURRENT_PLAYLIST",
                  cur_playlist: resp
                })
        })
        dispatch({
                type: "SET_PLAYLISTS",
                playlists
              })
      })
      console.log(token)
    }
    
  },[])

  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
