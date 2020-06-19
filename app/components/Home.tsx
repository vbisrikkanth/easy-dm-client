import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
       <div class="fixed inset-0 transition-opacity">
         <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
       </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <img src="https://github.com/balajis/twitter-export/raw/master/img/twitter-to-email.png"/>
                  <p class="font-serif font-extrabold leading-tight text-2xl"> Welcome to Easy DM</p>
                  <p class="mt-2 text-gray-500 leading-tight text-xs">Setup Instructions: Please register for an app on twitter and bring the keys here</p>
                </div>
                <form class="mt-4">
                      <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-semibold mb-2" for="consumerkey">
                          Consumer Key
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="consumerkey" type="text" placeholder=""/>
                      </div>
                       <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-semibold mb-2" for="consumersecret">
                          Consumer Secret
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="consumersecret" type="text" placeholder=""/>
                      </div>
                       <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-semibold mb-2" for="apptoken">
                          API Key
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apptoken" type="text" placeholder=""/>
                      </div>
                       <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-semibold mb-2" for="apptokensecret">
                          API Secret Key
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apptokensecret" type="text" placeholder=""/>
                      </div>

                      <div class="py-3 sm:flex sm:flex-row-reverse">
                          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                              <a href="/dashboard.html" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              Complete
                              </a>
                          </span>
                          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                              <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              Cancel
                              </button>
                          </span>
                      </div>
                </form>
              </div>
        </div>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    </div>
  );
}
