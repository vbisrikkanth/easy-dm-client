import React from 'react';
import Transition from './Transition.tsx'
import { useState} from 'react';

export default function Modal(props: any) {
    const [modalOpen, setModalOpen] = useState(true);

    function closeModal(modalState){
      setModalOpen(modalState)
      props.onClose && props.onClose();
    }
    return (
      <>
      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center" onClick={()=>closeModal(!modalOpen)}>
          <Transition
          show={modalOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
         >
           <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          </Transition>
          <Transition
          show={modalOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
             {props.children}
          </div>
        </Transition>
      </div>
      </>
    );
}
