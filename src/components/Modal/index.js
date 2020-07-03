import React from 'react';

const Modal = ({ children, title = "", show = false, closeModal }) => {
    return (
        <div className={show === true ? ' modal modal-open' : 'modal'}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    {title}
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;
