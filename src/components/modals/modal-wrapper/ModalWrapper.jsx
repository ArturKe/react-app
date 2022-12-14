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
        <ModalLayout
            closeEvent={closeHandler}
        >
            <div className='warn-modal'>
                <div className='warn-modal-header'>
                    <div className='warn-modal-header_title'>{props.header}</div>
                    <div>
                        <Button event={closeHandler}>Close</Button>
                    </div>
                </div>
                <div className='warn-modal-content'>{props.content}</div>
                <div className='warn-modal-buttons'>{props.footer}</div>
            </div>
        </ModalLayout>
    )
}