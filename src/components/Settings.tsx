import React from 'react'
import { SettingsInterface } from '../interface/SettingsInterface';
import '../styles/settings.css'
import "../styles/app.css"

const Settings = (props: SettingsInterface) => {
    return(
        <div>
            <h2>SETTINGS</h2>
                <div className="settings-list">
                    {props.theme === "hpi" ?
                        <div className="settings-mode">
                            <div onClick={props.handleTheme} className="settings-input hpi-settings">
                                <i className="settings-check fab fa-angellist"></i>  
                                <div className="hpi-title">
                                    LET'S HPI STYLE ! 
                                </div>
                            </div>
                        </div>
                    :
                        <div className="settings-mode">
                            <div onClick={props.handleTheme} className="settings-input dark-settings">
                                <i className="settings-check far fa-grimace"></i> 
                                <div className="dark-title">
                                    WELCOME TO DARK SIDE ! 
                                </div>
                            </div>
                        </div>
                    }   
                </div>
        </div>
    )
}

export default Settings;