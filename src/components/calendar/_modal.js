import React from 'react'

export const CalendarModal = () => {
    return (

        <div>
          <link rel="dns-prefetch" href="//unpkg.com" />
          <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
          <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
          <style dangerouslySetInnerHTML={{__html: "\n\t\t[x-cloak] {\n\t\t\tdisplay: none;\n\t\t}\n\t" }} />
          <div className="h-screen antialiased bg-gray-100 sans-serif">
            <div x-data="app()" x-init="[initDate(), getNoOfDays()]" x-cloak>
              <div className="container px-4 py-2 mx-auto md:py-24">
                {/* <div class="font-bold text-gray-800 text-xl mb-4">
                  Schedule Tasks
              </div> */}
                <div className="overflow-hidden bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between px-6 py-2">
                    <div>
                      <span x-text="MONTH_NAMES[month]" className="text-lg font-bold text-gray-800" />
                      <span x-text="year" className="ml-1 text-lg font-normal text-gray-600" />
                    </div>
                    <div className="px-1 border rounded-lg" style={{paddingTop: '2px'}}>
                      <button type="button" className="inline-flex items-center p-1 leading-none transition duration-100 ease-in-out rounded-lg cursor-pointer hover:bg-gray-200" >
                        <svg className="inline-flex w-6 h-6 leading-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>  
                      </button>
                      <div className="inline-flex h-6 border-r" />		
                      <button type="button" className="inline-flex items-center p-1 leading-none transition duration-100 ease-in-out rounded-lg cursor-pointer hover:bg-gray-200">
                        <svg className="inline-flex w-6 h-6 leading-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>									  
                      </button>
                    </div>
                  </div>	
                  <div className="-mx-1 -mb-1">
                    <div className="flex flex-wrap" style={{marginBottom: '-40px'}}>
                      <template x-for="(day, index) in DAYS"  />
                    </div>
                    <div className="flex flex-wrap border-t border-l">
                      <template x-for="blankday in blankdays" />	
                      <template x-for="(date, dateIndex) in no_of_days" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}} className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full">
                <div className="absolute relative left-0 right-0 max-w-xl p-4 mx-auto mt-24 overflow-hidden">
                  <div className="absolute top-0 right-0 inline-flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full shadow cursor-pointer hover:text-gray-800">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                    </svg>
                  </div>
                  <div className="block w-full p-8 overflow-hidden bg-white rounded-lg shadow">
                    <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-800 border-b">Add Event Details</h2>
                    <div className="mb-4">
                      <label className="block mb-1 text-sm font-bold tracking-wide text-gray-800">Event title</label>
                      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-blue-500" type="text" x-model="event_title" />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 text-sm font-bold tracking-wide text-gray-800">Event date</label>
                      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-blue-500" type="text" x-model="event_date" readOnly />
                    </div>
                    <div className="inline-block w-64 mb-4">
                      <label className="block mb-1 text-sm font-bold tracking-wide text-gray-800">Select a theme</label>
                      <div className="relative">
                        <select x-model="event_theme" className="block w-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-lg appearance-none hover:border-gray-500 focus:outline-none focus:bg-white focus:border-blue-500">
                          <template x-for="(theme, index) in themes" />
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-right">
                      <button type="button" className="px-4 py-2 mr-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100" >
                        Cancel
                      </button>	
                      <button type="button" className="px-4 py-2 font-semibold text-white bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-gray-700">
                        Save Event
                      </button>	
                    </div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
            </div>
          </div>
        </div>
      );
}
