

function ResultCard({ item }) {

    const addTOCollection = (item) => {

        const oldData = JSON.parse(localStorage.getItem('collection')) || []
        const newData = [...oldData, item]
        localStorage.setItem('collection', JSON.stringify(newData))

        console.log(oldData);
    }


    return (
        <div className="group relative w-[280px] h-[400px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
            >
                {item.type === "photo" ? (
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        controls
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}
            </a>

            <div className="absolute inset-0 from-black/90 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div className="text-white max-w-[70%]">
                    <h2 className="text-lg font-bold line-clamp-2">
                        {item.title || "Untitled"}
                    </h2>

                    <p className="text-sm text-gray-300 mt-1">
                        {item.type === "photo" ? "📷 Photo" : "🎥 Video"}
                    </p>
                </div>

                <button onClick={() => { addTOCollection(item) }} className="bg-white/20 backdrop-blur-md border cursor-pointer border-white/30 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition duration-300">
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard
