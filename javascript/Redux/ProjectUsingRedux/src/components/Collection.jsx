

function Collection() {
    const items = JSON.parse(localStorage.getItem("collection")) || [];
    return (
        <div className="group relative w-[280px] h-[400px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <a
                href={items.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
            >
                {items.type === "photo" ? (
                    <img
                        src={items.thumbnail}
                        alt={items.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <video
                        src={items.src}
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
            <div className="absolute bottom-0 left-0 right-0 p-5 flex itemss-end justify-between">
                <div className="text-white max-w-[70%]">
                    <h2 className="text-lg font-bold line-clamp-2">
                        {items.title || "Untitled"}
                    </h2>

                    <p className="text-sm text-gray-300 mt-1">
                        {items.type === "photo" ? "📷 Photo" : "🎥 Video"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Collection
