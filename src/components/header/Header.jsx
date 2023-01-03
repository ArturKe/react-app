// import React, { useContext, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
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
                <Link to="/">
                    <Button>CRUD</Button>
                </Link>
                <Link to="/info">
                    <Button>Information</Button>
                </Link>
            </div>
            <div className='header_component_user-control'>
                <Button>Login</Button>
                <Button>Join us</Button>
            </div>
        </div>
    )
}