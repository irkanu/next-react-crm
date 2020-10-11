import ProfileMenu from './ProfileMenu'
import NotificationMenu from './NotificationMenu'
import SearchForm from './SearchForm'

function SearchBar() {
    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    <SearchForm/>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    <NotificationMenu/>
                    <ProfileMenu/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar