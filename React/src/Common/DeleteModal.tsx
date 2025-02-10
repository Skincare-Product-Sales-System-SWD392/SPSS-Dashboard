import React from "react";
import Modal from "./Components/Modal";

// Icons
import { X } from 'lucide-react';

// Image
import deleteImg from "assets/images/delete.png";

interface props {
    show: boolean;
    onHide: () => void;
    onDelete: () => void;
}

const DeleteModal: React.FC<props> = ({ show, onHide, onDelete }) => {
    return (
        <React.Fragment>
            <Modal show={show} onHide={onHide} id="deleteModal" modal-center="true" className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4" dialogClassName='w-screen md:w-[25rem] bg-white shadow rounded-md dark:bg-zink-600'>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] overflow-y-auto px-6 py-8">
                    <div className="float-right">
                        <button data-modal-close="deleteModal" className="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"><X className="size-5" onClick={onHide} /></button>
                    </div>
                    <img src={deleteImg} alt="" className="block h-12 mx-auto" />
                    <div className="mt-5 text-center">
                        <h5 className="mb-1">Are you sure?</h5>
                        <p className="text-slate-500 dark:text-zink-200">Are you certain you want to delete this record?</p>
                        <div className="flex justify-center gap-2 mt-6">
                            <button type="reset" className="bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-600 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10" onClick={onHide}>Cancel</button>
                            <button type="submit" id="deleteRecord" data-modal-close="deleteModal" className="text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20" onClick={onDelete}>Yes, Delete It!</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default DeleteModal;