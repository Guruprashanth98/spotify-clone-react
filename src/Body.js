import React, { useEffect } from 'react';
import './Body.css'
import { useDataLayerValue } from './DataLayer';
import Header from './Header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow'
import ReactGa from "react-ga";

const Body = ({spotify, event}) => {
    const [{cur_playlist} ,dispatch] = useDataLayerValue()

    const songChangeEvent = () => {
        ReactGa.event({
            category: "Song Clicks",
            action: "Song change event",
        })
    }


    return ( 
        <div className="body">
            <Header spotify  = {spotify}/>

            <div className="body-info">
                <img src={cur_playlist?.images[0].url} alt ="banner.png"/>
                <div className="body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{cur_playlist?.name}</h2>
                    <p>{cur_playlist?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="body-shuffle" onClick = {event}/>
                    <FavoriteIcon fontSize = "large"/>
                    <MoreHorizIcon />
                </div>
                {cur_playlist?.tracks.items.map((item,idx) => (
                    <SongRow key = {idx} track = {item.track} event={songChangeEvent}/>
                ))}
            </div>
        </div>
     );
}
 
export default Body;