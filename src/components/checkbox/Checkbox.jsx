import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import './Checkbox.css';

export default function Checkbox (props) {
    const [checkBoxState, setCheckBoxState] = useState(props.isActive || false)
    const handler = () => {
        setCheckBoxState(!checkBoxState)
        // console.log(checkBoxState)
        if (typeof props.event === 'function') {
            props.event(!checkBoxState)
        }
    }
    useEffect(() => {
        // console.log('CheckBox Props: ' + props.isActive)
        setCheckBoxState(props.isActive)
    },[props.isActive])
    return (
        <div>
            <div onClick={() => handler()} className={['customCheckbox', `${checkBoxState ? 'active' : ''}`].join(' ')}></div>
        </div>
    )
}