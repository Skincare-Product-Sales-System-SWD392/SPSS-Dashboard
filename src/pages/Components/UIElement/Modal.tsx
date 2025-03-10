import React, { useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import Modal from "Common/Components/Modal";

const UiModal = () => {

    // defaultModal
    const [defaultModal, setDefaultModal] = useState<boolean>(false);
    const defaultToggle = () => setDefaultModal(!defaultModal);

    // topModal
    const [topModal, setTopModal] = useState<boolean>(false);
    const topToggle = () => setTopModal(!topModal);

    // bottomModal
    const [bottomModal, setBottomModal] = useState<boolean>(false);
    const bottomToggle = () => setBottomModal(!bottomModal);

    // extraSmallModal
    const [extraSmallModal, setExtraSmallModal] = useState<boolean>(false);
    const extraSmallToggle = () => setExtraSmallModal(!extraSmallModal);

    // smallModal
    const [smallModal, setSmallModal] = useState<boolean>(false);
    const smallToggle = () => setSmallModal(!smallModal);

    // defaultModal2
    const [defaultModal2, setDefaultModal2] = useState<boolean>(false);
    const default2Toggle = () => setDefaultModal2(!defaultModal2);

    // largeModal
    const [largeModal, setLargeModal] = useState<boolean>(false);
    const largeToggle = () => setLargeModal(!largeModal);

    // extraLargeModal
    const [extraLargeModal, setExtraLargeModal] = useState<boolean>(false);
    const extraLargeToggle = () => setExtraLargeModal(!extraLargeModal);

    // fullScreenModal
    const [fullScreenModal, setFullScreenModal] = useState<boolean>(false);
    const fullScreenToggle = () => setFullScreenModal(!fullScreenModal);

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title='Modal' pageTitle='UI Elements' />
            </div>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Default</h6>
                        <div className="flex flex-wrap gap-2">

                            <button data-modal-target="defaultModal" type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={defaultToggle}>Default Modal
                            </button>

                            <Modal show={defaultModal} onHide={defaultToggle} id="defaultModal" modal-center="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="topModal" type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={topToggle}>Top Modal
                            </button>

                            <Modal show={topModal} onHide={topToggle} id="topModal" modal-top="true" className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4"
                                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="bottomModal" type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={bottomToggle}>Bottom Modal</button>

                            <Modal show={bottomModal} onHide={bottomToggle} id="bottomModal" modal-bottom="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4"
                                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Modal Sizes</h6>

                        <div className="flex flex-wrap gap-2">
                            <button data-modal-target="extraSmallModal" type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={extraSmallToggle}>Extra Small Modal
                            </button>

                            <Modal show={extraSmallModal} onHide={extraSmallToggle} id="extraSmallModal" modal-center="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                                dialogClassName="w-screen md:w-[20rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="smallModal" type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={smallToggle}>Small Modal</button>

                            <Modal show={smallModal} onHide={smallToggle} id="smallModal" modal-center="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                                dialogClassName="w-screen md:w-[25rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="defaultModal2" type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={default2Toggle}>Default Modal
                            </button>

                            <Modal show={defaultModal2} onHide={default2Toggle} id="defaultModal2" modal-center="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full"                            >
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="largeModal" type="button"
                                className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:focus:ring-custom-400/20"
                                onClick={largeToggle}>Large Modal</button>

                            <Modal show={largeModal} onHide={largeToggle} id="largeModal" modal-center="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                                dialogClassName="w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="extraLargeModal" type="button"
                                className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:focus:ring-custom-400/20"
                                onClick={extraLargeToggle}>Extra Large Modal
                            </button>

                            <Modal show={extraLargeModal} onHide={extraLargeToggle} id="extraLargeModal" modal-center="true"
                                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                                dialogClassName="w-screen lg:w-[55rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>

                            <button data-modal-target="fullScreenModal" type="button"
                                className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:focus:ring-custom-400/20"
                                onClick={fullScreenToggle}>Extra Large Modal
                            </button>

                            <Modal show={fullScreenModal} onHide={fullScreenToggle} id="fullScreenModal" modal-center="true"
                                className="fixed inset-0 flex flex-col transition-all duration-300 ease-in-out z-drawer"
                                dialogClassName="flex flex-col w-full h-full bg-white dark:bg-zink-600">
                                <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
                                    closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
                                    <Modal.Title className="text-16">Modal Heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="p-4">
                                    <h5 className="mb-3 text-16">Modal Content</h5>
                                    <p className="text-slate-500 dark:text-zink-200">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic.</p>
                                </Modal.Body>
                                <Modal.Footer className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                    <h5 className="text-16">Modal Footer</h5>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UiModal;