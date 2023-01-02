import ModalWrapper from '../modal-wrapper/ModalWrapper';
import Button from '../../button/Button';
import './EditForm.css'
import { useState } from 'react';

export default function EditForm (props) {
    const closeHandler = () => {
        if (checkTypeFunc(props.event)) {
            props.event()
        }
    }
    const acceptEditHandler = () => {
        if (checkTypeFunc(props.acceptEdit)) {
            props.acceptEdit(props.id, title, desc)
        }
    }
    const checkTypeFunc = (props) => {
        return typeof props === 'function' ? true : false
    }
    const [title, setTitle] = useState(props.title)
    const [desc, setDesc] = useState(props.description)

    return (
        <ModalWrapper
            eventClose={closeHandler}
            header={'Edit Record: ' + props.title}
            content={
                <div className='edit-form'>
                    <div>Title:</div>
                    <input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                    <div>Description:</div>
                    <input type="text" defaultValue={props.description} onChange={(e) => setDesc(e.target.value)}/>
                </div>
            }
            footer={<Button event={acceptEditHandler}>Ok</Button>}
        ></ModalWrapper>
    )
}