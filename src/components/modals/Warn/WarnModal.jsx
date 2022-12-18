import React, { useState } from 'react';
import ModalLayout from '../../../layouts/Modal/ModalLayout';
import Button from '../../Button/button';
import './WarnModal.css';

export default function WarnModal (props) {
    const closeHandler = () => {
        props.event()
        console.log('Close')
    }
    const acceptHandler = () => {console.log("Accept")}

    return (
        <ModalLayout>
            <div className='warn-modal'>
                <div className='warn-modal-header'>
                    <div className='warn-modal-header_title'>Attention</div>
                    <Button event={closeHandler}>Close</Button>
                </div>
                <div className='warn-modal-content'>{props.title}</div>
                <div className='warn-modal-buttons'><Button event={acceptHandler}>Ok</Button></div>
            </div>
        </ModalLayout>
    )
}