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

  useEffect(()=> {
    spotify.getMyCurrentPlaybackState().then((r) =>{
      console.log(r)
    })
  },[spotify])

  return ( 
        <div className="footer">
            <div className="footer-left">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Usher_-_Confessions_album_cover.jpg/220px-Usher_-_Confessions_album_cover.jpg" alt ="" className ="album-logo" />
                <div className ="footer-songInfo">
                    <h4>Yeah !</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className ="footer-green" />
                <SkipPreviousIcon className  ="footer-icon" />
                <PlayCircleOutlineIcon fontSize = "large" className = "footer-icon" />
                <SkipNextIcon className = 'footer-icon' />
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