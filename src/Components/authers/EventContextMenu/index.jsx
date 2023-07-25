import React from "react";
import './EventContextMenu.css';

const EventContextMenu = (props) => {
    const { calendarEvent, left, top, items, isVisible, onHideNeeded} = props;

    const doAction = (calndEvnt, callback) => {
        callback(calndEvnt);
    }
    return (  
        <div className="contextMenu-wrapper" onContextMenu={(event)=>{event.preventDefault()}} onClick={()=>{
            onHideNeeded(true);
        }} style={{display: isVisible === true ? 'block' : 'none'}}>
            <div onContextMenu={(event)=>{event.preventDefault()}} className="event-context-menu" style={{left: left ? (left - 15)+'px' : 60+'px', top: top ? (top + 15)+'px' : 60+'px' }}>
                <ul onContextMenu={(event)=>{event.preventDefault()}}>
                {items ? items.map(({label, icon, action})=>{
                    return (<li className="event-context-menu-item" onClick={
                        (event)=>{
                            event.preventDefault();
                            doAction(calendarEvent, action);
                        }
                    }><span>{icon ? icon : ''}</span> {label ? label : ''}</li>);
                }) : ''}
                </ul>
            </div>
        </div>
        );
    }
    
    export default EventContextMenu;