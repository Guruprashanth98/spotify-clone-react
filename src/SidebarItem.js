import React from 'react';
import './SidebarItem.css'

const SidebarItem = ({title,Icon}) => {
    return ( 
        <div className ="sidebar-item">
            {Icon && <Icon className = "icons"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
     );
}
 
export default SidebarItem;