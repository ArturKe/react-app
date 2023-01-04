import React, {useEffect} from 'react';
import Button from '../../button/Button';
import Checkbox from '../../checkbox/Checkbox';
// import { EditIcon } from '../../icons/EditIcon';
import { EditIcon, DeleteIcon } from '../../icons';

import './ListItem.css';

export default function ListItem (props) {
    const {eventEdit=()=>{}, eventDelete=()=>{}, eventSelect=()=>{}} = props

    const handlerDelete = () => {
        eventDelete(props.id, props.title)
    }
    const handlerEdit = () => {
        eventEdit(props.id, props.title, props.description)
    }
    const handlerSelect = (state) => {
        eventSelect(props.id, state)
    }

    return (
        <div className='list-item'>
            <Checkbox event={handlerSelect} isActive={props.selected}></Checkbox>
            <div className='list-item-title'>{props.title || 'Some Title'}</div>
            <div className='list-item-buttons'>
                <Button icon={<EditIcon/>} event={handlerEdit}>Edit</Button>
                <Button icon={<DeleteIcon/>} event={handlerDelete}>Delete</Button>
            </div>
        </div>
    )
}