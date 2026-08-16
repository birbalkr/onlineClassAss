import { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/ProductAPI'
import { setLoading, setResults, setError } from '../redux/features/SearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

function ResultGrid() {

    const { query, activeTab, loading, results, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!query) return
        const GetData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query);
                    data = response.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                    }))
                }                
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'videos',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                    }))
                }
                dispatch(setResults(data))
                console.log(data);
            } catch (error) {
                dispatch(setError(error.message))
            }
        }
        GetData()
    }, [query, activeTab])

    if (error) return <div>{error}</div>
    if (loading) return <div>Loading...</div>

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                results.map((item, idx) => {
                    return <div key={idx}>
                        <ResultCard item={item} />
                    </div>
                })
            }
        </div>
    )
}

export default ResultGrid
