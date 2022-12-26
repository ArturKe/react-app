import React from 'react';
import ModalLayout from '../../../layouts/Modal/ModalLayout'
import Button from '../../button/Button';
import './ModalWrapper.css';

export default function WarnModal (props) {
    const closeHandler = () => {
        props.eventClose()
        console.log('Close')
    }

    return (
        <ModalLayout>
            <div className='warn-modal'>
                <div className='warn-modal-header'>
                    <div className='warn-modal-header_title'>{props.header}</div>
                    <Button event={closeHandler}>Close</Button>
                </div>
                <div className='warn-modal-content'>{props.content}</div>
                <div className='warn-modal-buttons'>{props.footer}</div>
            </div>
        </ModalLayout>
    )
}