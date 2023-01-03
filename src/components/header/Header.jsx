import React, { useContext, useState } from 'react';
import reactLogo from '../../assets/react.svg'
import Button from '../button/Button';
import './header.css';

export default function Header (props) {
    return (
        <div className='header_component'>
            <div className='header_component-logo'>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div className='header_component-buttons'>
                <Button>CRUD</Button>
                <Button>Information</Button>
            </div>
            <div className='header_component_user-control'>
                <Button>Login</Button>
                <Button>Join us</Button>
            </div>
        </div>
    )
}