import ModalWrapper from '../../modals/modal-wrapper/ModalWrapper';
import Button from '../../button/Button';
import './EditForm.css'
import { useState, useEffect, useRef } from 'react';

export default function EditForm (props) {
    const {event=()=>{}, acceptEdit=()=>{}} = props

    const acceptEditHandler = () => {
        acceptEdit(props.id, title, desc)
    }

    const [title, setTitle] = useState(props.title)
    const [desc, setDesc] = useState(props.description)

    const textInput = useRef(null)
    useEffect(() => {
        textInput.current.focus()
    }, [])

    return (
        <ModalWrapper
            eventClose={event}
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