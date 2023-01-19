import React, { useEffect, useState } from 'react';
import Button from '@/components/button/Button';
import Checkbox from '@/components/checkbox/Checkbox';
import EditForm from '@/components/forms/edit/EditForm';
import WarnModal from '@/components/modals/warn/WarnModal';
import ListItem from '@/components/lists/Item/ListItem';
import './listComponent.css';
import { PlusSquare, PlusCircle, List, DeleteIcon } from '../../icons';

export default function ListComponent (props) {
    const [checkBoxState, setCheckBoxState] = useState(false)
    const [items, setItems] = useState([
        {id: 0, title: 'Firsdt Article', description: 'Hello world!!!', selected: false},
        {id: 1, title: 'Second Article', description: 'Hello world!!!', selected: false},
        {id: 2, title: 'Third Article', description: 'Hello world!!!', selected: true},
        {id: 3, title: 'Article about Bears', description: 'Hello world!!!', selected: false},
        {id: 4, title: 'Article about Dinosaurs', description: 'Hello world!!!', selected: false},
    ])

    const createRecordEvent = () => {
        toggleVisEditForm()
        setWarnModalType('create')
        setWarnModalTitle('')
        setWarnModalDesc('')  
    }
    const createRecordAccept = (id, title, description) => {
        toggleVisEditForm()
        console.log(title + description)
        if (title.length > 0 || description.length > 0) {
            let newItem = [...items]
            // newItem.push({id: +new Date, title: (new Date).toString(), description: 'Hello world!!!', selected: false},)
            newItem.push({id: +new Date, title, description, selected: false, created: (new Date).toString()},)
            setItems(newItem)
        }
    }

    const editRecordEvent = (id, title, description) => {
        toggleVisEditForm()
        setWarnModalType('edit')
        setWarnModalId(id)
        setWarnModalTitle(title)
        setWarnModalDesc(description)  
        // console.log('Edit record with id: ' + id + title + description)
    }
    const editRecordAccept = (id, title, description) => {
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

    const deleteAllRecordsEvent = () => {
        if (amountSelectedRecords > 0) {
            toggleVisWarnModal()
            setWarnModalType('delete-all')
            setWarnModalTitle(amountSelectedRecords > 1 ? `Delete ${amountSelectedRecords} records?` : `Delete this record?` )
        }
    }
    const deleteAllRecordsAccept = () => {
        toggleVisWarnModal()
        setCheckBoxState(false)
        setWarnModalTitle('Delete all records?')
        deleteAllAction()
    }

    const deleteRecordEvent = (id, title) => {
        toggleVisWarnModal()
        setWarnModalType('delete')
        setWarnModalId(id)
        setWarnModalTitle(`Delete record: "${title}"?`)
    }
    const deleteRecordAccept = (id) => {
        toggleVisWarnModal()
        deleteAction(warnModalId)
    }

    // Select actions
    const selectRecord = (id, state) =>{
        let newItem = items.map((record) => {
            return record.id === id ? { ...record, selected: state} : record
        })
        setItems(newItem)
    }
    const selectAll = (state) => {
        setCheckBoxState(state)
        let newItem = items.map((item) => ({ ...item, selected: state}))
        setItems(newItem)
    }

    const checkSelectedRecords = () => {
        const amountRecords = (items.filter((record) => record.selected ) || []).length
        setAmountSelectedRecords(amountRecords)
        setAmountRecords(items.length)
    }
    useEffect(() => {
        checkSelectedRecords()
    }, [items])

    // Actions
    const deleteAction = (id) => {
        let newItem = items.filter((record) => record.id !== id )
        setItems(newItem)
    }
    const deleteAllAction = () => {
        let newItem = items.filter((record) => !record.selected)
        setItems(newItem)
    }

    const acceptHandler = (type) => {
        let functionHandler = () => {}
        switch (type) {
            case 'delete':
                functionHandler = deleteRecordAccept
                break
            case 'delete-all':
                functionHandler = deleteAllRecordsAccept
                break
            case 'edit':
                functionHandler = editRecordAccept
                break
            case 'create':
                functionHandler = createRecordAccept
                break
        }
        return functionHandler
    }

    // Modals
    const [warnModalVisible, setWarnModalVisible] = useState(false)
    const [EditFormVisible, setEditFormVisible] = useState(false)
    const [warnModalTitle, setWarnModalTitle] = useState('')
    const [warnModalDesc, setWarnModalDesc] = useState('')
    const [warnModalId, setWarnModalId] = useState(0)
    const [warnModalType, setWarnModalType] = useState('')
    const [amountSelectedRecords, setAmountSelectedRecords] = useState(0)
    const [amountRecords, setAmountRecords] = useState(0)

    const modalWarn = () => {
        return warnModalVisible ?
            <WarnModal 
                title={warnModalTitle}
                event={toggleVisWarnModal}
                acceptDelete={acceptHandler(warnModalType)}
                >
            </WarnModal> : null
    }
    const editForm = () => {
        return EditFormVisible ?
            <EditForm
                type={warnModalType}
                id={warnModalId}
                title={warnModalTitle} 
                description={warnModalDesc} 
                event={toggleVisEditForm}
                acceptEdit={acceptHandler(warnModalType)}
                >
            </EditForm> : null
    }
    const toggleVisWarnModal = () => {setWarnModalVisible(!warnModalVisible)}
    const toggleVisEditForm = () => {setEditFormVisible(!EditFormVisible)}

    return (
        <div className='list'>
            {modalWarn()}
            {editForm()}
            <div className='list-header'>CRUD Form</div>
            <div className='list-controll'>
                <Checkbox isActive={checkBoxState} event={selectAll}></Checkbox>
                <div>Selected rows: {amountSelectedRecords}</div>
                <div className='list-controll-buttons'>
                    <Button icon={<PlusCircle/>} event={createRecordEvent}><div className="text-button">Create</div></Button>
                    <Button icon={<DeleteIcon/>} event={deleteAllRecordsEvent}><div className="list-icon-button">{<List/>}</div><div className="text-button">Delete All Selected</div></Button>
                </div>
            </div>
            <div className='list-content'>
                <div className='list-content-item'>Rows: {amountRecords}</div>
                {items.map(item => {
                    return <ListItem 
                        eventDelete = {deleteRecordEvent}
                        eventEdit = {editRecordEvent}
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