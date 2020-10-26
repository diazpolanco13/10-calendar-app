import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";

export const CalendarModal = () => {
  const [isOpen, seTisOpen] = useState(true);

  const closeModal = () => {
    seTisOpen(false);
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <Transition
            show={isOpen}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Modal */}
            <Menu.Items static>
              <Menu.Item>

                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                    className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full"
                  >
                    <div className="absolute left-0 right-0 max-w-xl p-4 mx-auto mt-24 overflow-hidden">
                      <div
                        onClick={closeModal}
                        className="absolute top-0 right-0 inline-flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full shadow cursor-pointer hover:text-gray-800"
                      >
                        <svg
                          className="w-6 h-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                        </svg>
                      </div>
                      <div className="block w-full p-8 overflow-hidden bg-white rounded-lg shadow">
                        <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-800 border-b">
                          Add Event Details
                        </h2>
                        <div className="mb-4">
                          <label className="block mb-1 text-sm font-bold tracking-wide text-gray-800">
                            Event title
                          </label>
                          <input
                            className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                            type="text"
                            x-model="event_title"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block mb-1 text-sm font-bold tracking-wide text-gray-800">
                            Event date
                          </label>
                          <input
                            className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                            type="text"
                            x-model="event_date"
                            readOnly
                          />
                        </div>

                        <div className="mt-8 text-right">
                          <button
                            type="button"
                            className="px-4 py-2 mr-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="px-4 py-2 font-semibold text-white bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-gray-700"
                          >
                            Save Event
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

              </Menu.Item>
            </Menu.Items>
            {/* /Modal */}
          </Transition>
        </>
      )}
    </Menu>
  );
};
