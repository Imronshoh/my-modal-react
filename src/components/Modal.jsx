import React from "react";

import "./Modal.css";

export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
    return (
        <div
            className="modal-container"
        >
            <div className="modal">

                <div className="modal-content">{children}</div>
                <div className="modal-footer">
                    <button
                        type="submit"
                        className="btn btn-submit"
                        onClick={() => onSubmit()}
                    >
                        Submit
                    </button>
                    <button
                        type="submit"
                        className="btn btn-cancel"
                        onClick={() => onCancel()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};