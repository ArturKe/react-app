import React, { useEffect, useState } from 'react';
import './Checkbox.css';

export default function Checkbox (props) {
    const [checkBoxState, setCheckBoxState] = useState(props.isActive || false)
    const {event=()=>{}} = props

    const handler = () => {
        setCheckBoxState(!checkBoxState)
        event(!checkBoxState)
    }
    useEffect(() => {
        setCheckBoxState(props.isActive)
    },[props.isActive])
    return (
        <div>
            <div onClick={() => handler()} className={['customCheckbox', `${checkBoxState ? 'active' : ''}`].join(' ')}></div>
        </div>
    )
}