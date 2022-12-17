import React, {useEffect} from 'react';
import Button from '../../Button/button';
import Checkbox from '../../checkbox/Checkbox';
import './listItem.css';

export default function ListItem (props) {
    const handlerDelete = () => {
        if (typeof props.eventDelete === 'function') {
            props.eventDelete(props.id)
        }
    }
    const handlerEdit = () => {
        if (typeof props.eventDelete === 'function') {
            props.eventEdit(props.id)
        }
    }
    // useEffect(() => {console.log(props.id + ' ' + props.selected)},[props.selected])
    return (
        <div className='list-item'>
            <Checkbox isActive={props.selected}></Checkbox>
            <div className='list-item-title'>{props.title || 'Some Title'}</div>
            <div className='list-item-buttons'>
                <Button event={handlerEdit}>Edit</Button>
                <Button event={handlerDelete}>Delete</Button>
            </div>
        </div>
    )
}