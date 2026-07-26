
import SearchBar from './SearchBar'
import ResultGrid from './ResultGrid'
import Tab from './Tab'

export default function HomPage() {
    return (
        <div className='bg-gray-950 min-h-screen text-white'>
            <SearchBar />
            <Tab />
            <ResultGrid />

        </div>
    )
}
