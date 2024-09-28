import React from 'react'

const New = () => {
  return (
    <main>
        <h1 className='bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 inline-block text-transparent bg-clip-text font-bold text-3xl text-center'>New Service Creation [MODE:DEV]</h1>
        <ul className='text-center mx-3 my-4'>
          <p className='text-3xl font-semibold'>PICK A SERVICE:</p>
          <div className="flex">
            <div className="flex my-4">
              <a href="#websitepublishung" className="w-96 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gradient-to-r dark:hover:bg-gradient-to-r hover:from-red-600 hover:via-indigo-500 hover:to-sky-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
              <li>
                Website publishing
                </li>
              </a>
          <a href="#email.premium" className="w-96 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gradient-to-r dark:hover:bg-gradient-to-r hover:from-red-600 hover:via-indigo-500 hover:to-sky-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
          <li>
            Premium Email account (Paid)
            </li>
          </a>
          <a href="#email.free" className="w-96 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gradient-to-r dark:hover:bg-gradient-to-r hover:from-red-600 hover:via-indigo-500 hover:to-sky-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
          <li>
            Basic Email account (Free)
            </li>
          </a>
        </div>
      </div>
      </ul>
    </main>
  )
}

export default New