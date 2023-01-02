import React, { useEffect, useState } from 'react';
import Button from '../../button/Button';
import Checkbox from '../../checkbox/Checkbox';
import EditForm from '../../modals/edit/EditForm';
import WarnModal from '../../modals/Warn/WarnModal';
import ListItem from '../Item/ListItem';
import './listComponent.css';

export default function ListComponent (props) {
    const [checkBoxState, setCheckBoxState] = useState(false)
    const [items, setItems] = useState([
        {id: 0, title: 'Firsdt Article', description: 'Hello world!!!', selected: false},
        {id: 1, title: 'Second Article', description: 'Hello world!!!', selected: false},
        {id: 2, title: 'Third Article', description: 'Hello world!!!', selected: true},
        {id: 3, title: 'Article about Bears', description: 'Hello world!!!', selected: false},
        {id: 4, title: 'Article about Dinosaurs', description: 'Hello world!!!', selected: false},
    ])
    const deleteAllRecords = (id, title) => {
        // toggleVisWarnModal()
        console.log('Delete ALL')
        setCheckBoxState(false)
        setWarnModalTitle('Delete all records?')
        deleteAllAction()
    }
    const deleteRecord = (id, title) => {
        toggleVisWarnModal()
        console.log('Delete record with id: ' + id + title)
        setWarnModalTitle(`Delete record: "${title}"?`)
        deleteAction(id)
    }
    const editRecord = (id, title, description) => {
        toggleVisEditForm()
        setWarnModalId(id)
        setWarnModalTitle(title)
        setWarnModalDesc(description)  
        console.log('Edit record with id: ' + id + title + description)
    }
    const acceptEditModal = (id, title, description) => {
        toggleVisEditForm()
        console.log('Accept record with: ' + id + title + description)

        let newItems = [...items]

        let editItem = newItems.find((item) => item.id === id)
        editItem.title = title
        editItem.description = description

        console.log(editItem)
        console.log(newItems)
        setItems(newItems)
        console.log(items)
    }
    const selectAll = (state) => {
        setCheckBoxState(state)
        let newItem = items.map((item) => ({ ...item, selected: state}))
        setItems(newItem)
    }
    const createRecord = () => {
        let newItem = [...items]
        newItem.push({id: +new Date, title: (new Date).toString(), description: 'Hello world!!!', selected: false},)
        setItems(newItem)
    }
    const selectRecord = (id, state) =>{
        console.log(`Id: ${id}, State: ${state}`)
        let newItem = items.map((record) => {
            return record.id === id ? { ...record, selected: state} : record
        })
        setItems(newItem)
    }
    // Actions
    const deleteAction = (id) => {
        console.log(id)
        let newItem = items.filter((record) => record.id !== id )
        console.log(newItem)
        setItems(newItem)
    }
    const deleteAllAction = () => {
        let newItem = items.filter((record) => !record.selected)
        console.log(newItem)
        setItems(newItem)
    }

    // Modals
    const [warnModalVisible, setWarnModalVisible] = useState(false)
    const [EditFormVisible, setEditFormVisible] = useState(false)
    const [warnModalTitle, setWarnModalTitle] = useState('')
    const [warnModalDesc, setWarnModalDesc] = useState('')
    const [warnModalId, setWarnModalId] = useState(0)

    const modalWarn = () => {
        return warnModalVisible ? <WarnModal title={warnModalTitle} event={toggleVisWarnModal}></WarnModal> : null
    }
    const editForm = () => {
        return EditFormVisible ?
            <EditForm 
                id={warnModalId}
                title={warnModalTitle} 
                description={warnModalDesc} 
                event={toggleVisEditForm}
                acceptEdit={acceptEditModal}
                >
            </EditForm> : null
    }
    const toggleVisWarnModal = () => {setWarnModalVisible(!warnModalVisible)}
    const toggleVisEditForm = () => {setEditFormVisible(!EditFormVisible)}

    return (
        <div className='list'>
            {modalWarn()}
            {editForm()}
            <div className='list-header'>Header</div>
            <div className='list-controll'>
                <Checkbox isActive={checkBoxState} event={selectAll}></Checkbox>
                <div className='list-controll-buttons'>
                    <Button event={createRecord}>Create</Button>
                    <Button event={deleteAllRecords}>Delete All Selected</Button>
                </div>
            </div>
            <div className='list-content'>
                <div className='list-content-item'>Row</div>
                {items.map((item, index) => {
                    return <ListItem 
                        eventDelete = {deleteRecord}
                        eventEdit = {editRecord}
                        eventSelect = {selectRecord}
                        id={item.id}
                        selected={item.selected}
                        title={item.title}
                        description = {item.description}
                        key={item.id}
                    ></ListItem>
                })}
            </div>

        </div>
    )
}