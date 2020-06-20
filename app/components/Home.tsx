import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import Modal from './Modal.tsx';
import { useState} from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
       {modalOpen && (<Modal>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <img src="https://github.com/balajis/twitter-export/raw/master/img/twitter-to-email.png"/>
                  <p className="font-serif font-extrabold leading-tight text-2xl"> Welcome to Easy DM</p>
                  <p className="mt-2 text-gray-500 leading-tight text-xs">Setup Instructions: Please register for an app on twitter and bring the keys here</p>
                </div>
                <form className="mt-4">
                      <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="consumerkey">
                          Consumer Key
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="consumerkey" type="text" placeholder=""/>
                      </div>
                       <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="consumersecret">
                          Consumer Secret
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="consumersecret" type="text" placeholder=""/>
                      </div>
                       <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="apptoken">
                          API Key
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apptoken" type="text" placeholder=""/>
                      </div>
                       <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="apptokensecret">
                          API Secret Key
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apptokensecret" type="text" placeholder=""/>
                      </div>

                      <div className="py-3 sm:flex sm:flex-row-reverse">
                          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                              <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              Complete
                              </button>
                          </span>
                          <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              Cancel
                              </button>
                          </span>
                      </div>
                </form>
              </div>
        </Modal>)}
    </div>
  );
}
