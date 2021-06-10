import React, { useEffect } from 'react';
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';


const Footer = ({spotify}) => {
  const [{token, item, playing}, dispatch] = useDataLayerValue()      
  console.log("rerender")
  useEffect(()=> {
    spotify.getMyCurrentPlaybackState().then((r) =>{

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      })

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      })
    })
  },[spotify])

  const handlePlayPause  = () => {
    if(playing){
      spotify.pause()
      dispatch({
        type: "SET_PLAYING",
        playing: false
      })
    }
    else{
      spotify.play()
      dispatch({
        type: "SET_PLAYING",
        playing: true
      })
    }
  }

  const skipPrevious = () => {
    spotify.skipToPrevious();
    setCurrPlaying()
  }

  const skipNext = () => {
    spotify.skipToNext({offset:5});
    setCurrPlaying()
  };
  const setCurrPlaying = () => {
    spotify.getMyCurrentPlayingTrack().then((r) => {
      
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      console.log(item.name)
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    })
  }
  return ( 
        <div className="footer">
            <div className="footer-left">
                <img src={item?.album.images[0].url} alt ={item?.name} className ="album-logo" />
                {item? ( 
                  <div className ="footer-songInfo">
                      <h4>{item?.name}</h4>
                      <p>{item?.artists.map((artist) => artist.name).join(", ")}</p>
                  </div> 
                ) : 
                  <div className ="footer-songInfo">
                    <h4>No song is playing</h4>
                    <p>...</p>
                  </div> 
                }
            </div>
            <div className="footer-center">
                <ShuffleIcon className ="footer-green" />
                <SkipPreviousIcon className  ="footer-icon" onClick = {skipPrevious}/>
                {playing ? <PauseCircleOutlineIcon  onClick = {handlePlayPause} fontSize = "large" className = "footer-icon" /> : <PlayCircleOutlineIcon onClick = {handlePlayPause} fontSize = "large" className = "footer-icon" />}
                <SkipNextIcon onClick = {skipNext} className = 'footer-icon' />
                <RepeatIcon className = "footer-green"/>
            </div>
            <div className="footer-right">
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>
        </div>
     );
}
 
export default Footer;