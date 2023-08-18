import React from "react";
import './EventContextMenu.css';
import { items } from "./items";

const EventContextMenu = (props) => {
    const { calendarEvent, left, top, permissions, isVisible, onHideNeeded} = props;

    // définissez vos actions ici

    const doAction = (calndEvnt, callback) => {
        callback(calndEvnt);
    }
    return (  
        <div className="contextMenu-wrapper" onContextMenu={(event)=>{event.preventDefault()}} onClick={()=>{
            onHideNeeded(true);
        }} style={{display: isVisible === true ? 'block' : 'none'}}>
            <div onContextMenu={(event)=>{event.preventDefault()}} className="event-context-menu" style={{left: left ? (left - 15)+'px' : 60+'px', top: top ? (top + 15)+'px' : 60+'px' }}>
                <ul onContextMenu={(event)=>{event.preventDefault()}}>
                {items ? items.map((item)=>{
                    const {label, icon, action, hasDivider} = item.config;
                    if(permissions.includes(item.perm)){
                        return (<li className={hasDivider ? 'hasDivider' : ''} onClick={
                            (event)=>{
                                event.preventDefault();
                                doAction(calendarEvent, action);
                            }
                        }><span>{icon ? icon : ''}</span> {label ? label : ''}</li>);
                    }
                    return "";
                }) : ''}
                </ul>
            </div>
        </div>
        );
    }
    
    export default EventContextMenu;