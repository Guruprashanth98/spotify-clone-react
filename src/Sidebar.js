import React from 'react';
import './Sidebar.css'
import SidebarItem from './SidebarItem'
import  HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import {useDataLayerValue} from './DataLayer'

const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue()
    return ( 
        <div className="sidebar">
            <img className = "logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt="spotify-logo.png"/>
            <SidebarItem Icon = {HomeIcon} title = "Home" />
            <SidebarItem Icon = {SearchIcon} title = "Search" />
            <SidebarItem Icon = {LibraryMusicIcon} title = "Your Library" />
            
            <br />
            <strong className  = "sidebar-title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((item,idx) => <SidebarItem key ={idx} title={item.name}/>)}
        </div>
    );
}
 
export default Sidebar;