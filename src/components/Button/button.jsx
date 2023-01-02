import React, { useState } from 'react';
import { useEffect } from 'react';
import './Button.css';

export default function Button (props) {
    // const [name, setName] = useState(props.name)
    // useEffect(() => {console.log(props.children)},[props.children])
    const handler = () => {
        if (typeof props.event === 'function') {
            props.event()
        }
    }
    return (
        <button onClick={() => handler()} className="customButton">{props.children || props.name}</button>

    )
}