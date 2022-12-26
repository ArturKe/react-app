import ModalWrapper from '../modal-wrapper/ModalWrapper';
import Button from '../../button/Button';
import './EditForm.css'

export default function EditForm (props) {
    const closeHandler = () => {
                props.event()
                console.log('Close')
            }
    const acceptHandler = () => {console.log("Accept")}

    return (
        <ModalWrapper
            eventClose={closeHandler}
            header={'Edit Record: ' + props.title}
            content={
                <div className='edit-form'>
                    <input type="text" placeholder={props.title} defaultValue={props.title} />
                    <div>Description:</div>
                    <input type="text" />
                </div>
            }
            footer={<Button event={acceptHandler}>Ok</Button>}
        ></ModalWrapper>
    )
}