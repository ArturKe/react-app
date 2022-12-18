import React from 'react';
import './ModalLayout.css';

export default function ModalLayout (props) {
    return (
        <div className='modal-layout'>
            <div className='modal-layout-content'>
                {props.children}
            </div>
        </div>
    )
}