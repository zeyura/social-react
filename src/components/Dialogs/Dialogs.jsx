import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm, Field} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

const DialogForm = (props) => {
    return (
        <form className={s.dialogForm} onSubmit={props.handleSubmit}>
            <div>
                 <Field name={'newMessageBody'}
                        component='textarea'
                        placeholder='Enter your message'>
                 </Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm)

///////////////////////////////////

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} data-num={m.id} key={m.id} /> );


    let onSendMessageClick = (data) => {
        props.SEND_MESSAGE(data.newMessageBody);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>

                <DialogReduxForm onSubmit={onSendMessageClick} />

            </div>
        </div>
    )
}

export default Dialogs;