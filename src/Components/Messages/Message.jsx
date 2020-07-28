import React from 'react';
import '../../App.css';

const Message = ({avatar, isIncomingMessage, text, hours, minutes, checkedTheme}) => {
    return (
        <div className={`${isIncomingMessage ? 'message--incoming' : 'message-outgoing'} flex-container message`}>
            <div className={`${isIncomingMessage ? 'message--incoming' : 'message-outgoing'} flex-container message__container br5`}>
                <img src={avatar} alt='' className='small-avatar' />
                <span className='message__text'>{text}</span>
                <span className={`message__time colorDefault color${checkedTheme}`}>{`${hours}:${minutes}`}</span>
            </div>
        </div>
    )
};

export default Message;