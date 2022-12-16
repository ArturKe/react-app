import React, { useContext, useState } from 'react';
import './header.css';

export default function Header (props) {
    return (
        <div className='header_component'>
            {props.children}
        </div>
    )
}