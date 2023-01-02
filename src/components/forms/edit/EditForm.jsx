import ModalWrapper from '../../modals/modal-wrapper/ModalWrapper';
import Button from '../../button/Button';
import './EditForm.css'
import { useState, useEffect, useRef } from 'react';

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

    const textInput = useRef(null)
    useEffect(() => {
        console.log(textInput)
        textInput.current.focus()
    })

    return (
        <ModalWrapper
            eventClose={closeHandler}
            header={props.type ==='edit' ? 'Edit Record: ' + props.title : 'Create record' }
            content={
                <div className='edit-form'>
                    <div>Title:</div>
                    <input type="text" ref={textInput} defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                    <div>Description:</div>
                    <input type="text" defaultValue={props.description} onChange={(e) => setDesc(e.target.value)}/>
                </div>
            }
            footer={<Button event={acceptEditHandler}>Ok</Button>}
        ></ModalWrapper>
    )
}