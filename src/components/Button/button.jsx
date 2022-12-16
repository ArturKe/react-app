import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './button.css';

export default function Button (props) {
    const [name, setName] = useState(props.name)
    useEffect(() => {console.log(props.children)},[props.children])
    return (
        <div>
            <button onClick={() => props.event()} className="customButton">{props.children || props.name}</button>
        </div>
    )
}