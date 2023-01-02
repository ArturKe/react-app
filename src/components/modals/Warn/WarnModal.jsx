import ModalWrapper from '../modal-wrapper/ModalWrapper';
import Button from '../../button/Button';

export default function WarnModal (props) {
    const closeHandler = () => {
                props.event()
                console.log('Close')
            }
    const acceptHandler = () => {
        props.acceptDelete()
        console.log("Accept")
    }

    return (
        <ModalWrapper
            eventClose={closeHandler}
            header='Attention!'
            content={props.title}
            footer={<Button event={acceptHandler}>Ok</Button>}
        ></ModalWrapper>
    )
}