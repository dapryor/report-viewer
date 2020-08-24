import React from 'react';

import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'
import './ToggleButtons.styles.css'

export const ToggleButtons = (props) => {
    const {defaultValue, onChange, buttons} = props
    const buttonElements = buttons.map(button => {
        return (<ToggleButton 
                key={button.id} 
                value={button.value} 
                aria-label={button.value}
                classes={{
                  label: "button-label"
                }}>
            <p>{button.value}</p>
          </ToggleButton>)
    })
    return (
      <ToggleButtonGroup
        value={defaultValue}
        exclusive
        onChange={onChange}
        aria-label="diff view"
      >
        {buttonElements}
      </ToggleButtonGroup>
    )
  }