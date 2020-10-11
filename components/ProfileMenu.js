import {useState} from 'react'

export default function ProfileMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-3 relative">
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                    id="user-menu" aria-label="User menu" aria-haspopup="true">
                    <img className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""/>
                </button>
            </div>
            <div className={`${isOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg transition ease-out duration-100`}>
                <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical"
                    aria-labelledby="user-menu">
                    <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                        role="menuitem">Your Profile</a>

                    <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                        role="menuitem">Settings</a>

                    <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                        role="menuitem">Sign out</a>
                </div>
            </div>
        </div>
    )
}
