import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/SearchSlice"


function Tab() {
    const tabs = ['photos', 'videos']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className='flex gap-5 p-6'>
            {tabs.map((tab, index) => {
                return (
                    <button
                        className={`${(activeTab === tab ? 'bg-blue-600' : 'bg-gray-700')} px-4 py-2 border-2 rounded cursor-pointer active:scale-95 uppercase`}
                        key={index}
                        onClick={() => {
                            dispatch(setActiveTab(tab))
                        }}
                    >
                        {tab}
                    </button>
                )
            })}
        </div>
    )
}

export default Tab
