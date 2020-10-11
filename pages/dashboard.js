import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'

function Dashboard() {
    return (
        <div>
            <div className="h-screen flex overflow-hidden bg-cool-gray-100">
                <Sidebar/>
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <SearchBar/>
                    <main className="flex-1 relative overflow-y-auto focus:outline-none" tabIndex="0">
                        <div className="pt-2 pb-6 md:py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <div className="py-4">
                                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Dashboard