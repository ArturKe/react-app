import React, { useContext, useState } from 'react';
import reactLogo from '../../assets/react.svg'
import Button from '../Button/button';
import './header.css';

export default function Header (props) {
    return (
        <div className='header_component'>
            <div className='header_component-logo'>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div className='header_component-buttons'>
                <Button>Page 1</Button>
                <Button>Page 2</Button>
                <Button>Page 3</Button>
            </div>
            {props.children}
        </div>
    )
}