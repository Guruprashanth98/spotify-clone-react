import React,{useEffect} from 'react';
import "./Player.css";
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import ReactGa from  "react-ga";

const Player = ({spotify}) => {
    
    useEffect(() => {
        ReactGa.initialize("UA-182405306-1");
        ReactGa.pageview("/");
    })
    
    const onClickHandler = () => {
        ReactGa.event({
            category: "Playlist Button",
            action: "Songs in the whole playlist queued",
        })
    };

    const songPlayEvent = () => {
        ReactGa.event({
            category: "Play Button",
            action: "Song Played/Paused",
        })
    }

    const PlaylistSelectEvent = () => {
        ReactGa.event({
            category: "Playlist select",
            action: "Playlist Visited",
        })
    }

    return ( 
        <div className="player">
            <div className="player-body">
                <Sidebar event ={PlaylistSelectEvent}/>
                <Body spotify = {spotify} event = {onClickHandler}/>
            </div>
            <Footer spotify={spotify} event ={songPlayEvent}/>
        </div>
     );
}
 
export default Player;