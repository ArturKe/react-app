import React, {useEffect} from 'react';
import Button from '../../Button/button';
import Checkbox from '../../checkbox/Checkbox';
import './ListItem.css';

export default function ListItem (props) {
    const handlerDelete = () => {
        if (typeof props.eventDelete === 'function') {
            props.eventDelete(props.id, props.title)
        }
    }
    const handlerEdit = () => {
        if (typeof props.eventDelete === 'function') {
            props.eventEdit(props.id)
        }
    }
    const handlerSelect = (state) => {
        console.log('State: ' + state)
        if (typeof props.eventSelect === 'function') {
            props.eventSelect(props.id, state)
        }
    }
    // useEffect(() => {console.log(props.id + ' ' + props.selected)},[props.selected])
    return (
        <div className='list-item'>
            <Checkbox event={handlerSelect} isActive={props.selected}></Checkbox>
            <div className='list-item-title'>{props.title || 'Some Title'}</div>
            <div className='list-item-buttons'>
                <Button event={handlerEdit}>Edit</Button>
                <Button event={handlerDelete}>Delete</Button>
            </div>
        </div>
    )
}