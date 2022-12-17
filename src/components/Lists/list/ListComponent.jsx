import React, { useEffect, useState } from 'react';
import Button from '../../Button/button';
import Checkbox from '../../checkbox/Checkbox';
import ListItem from '../listItem/ListItem';
import './listComponent.css';

export default function ListComponent (props) {
    const [checkBoxState, setCheckBoxState] = useState(props.isActive || false)
    const [items, setItems] = useState([
        {id: 0, title: 'Firsdt Article', selected: false},
        {id: 1, title: 'Second Article', selected: false},
        {id: 2, title: 'Third Article', selected: true},
        {id: 3, title: 'Article about Bears', selected: false},
        {id: 4, title: 'Article about Dinosaurs', selected: false},
    ])
    const deleteRecord = (id) => {
        console.log('Delete record with id: ' + id)
    }
    const editRecord = (id) => {
        console.log('Edit record with id: ' + id)
    }
    const selectAll = (state) => {
        let newItem = items.map((item) => ({ ...item, selected: state}))
        setItems(newItem)
    }
    const createRecord = () => {
        let newItem = [...items]
        newItem.push({id: Math.random(), title: 'Second Article', selected: false},)
        setItems(newItem)
    }
    return (
        <div className='list'>
            <div className='list-header'>Header</div>
            <div className='list-controll'>
                <Checkbox event={selectAll}></Checkbox>
                <div className='list-controll-buttons'>
                    <Button event={createRecord}>Create</Button>
                    <Button>Delete All Selected</Button>
                </div>
            </div>
            <div className='list-content'>
                <div className='list-content-item'>Row</div>
                {items.map((item, index) => {
                    return <ListItem 
                        eventDelete = {deleteRecord}
                        eventEdit = {editRecord}
                        id={item.id}
                        selected={item.selected}
                        title={item.title} 
                        key={item.id}
                    ></ListItem>
                })}
            </div>

        </div>
    )
}