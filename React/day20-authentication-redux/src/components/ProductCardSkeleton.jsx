import React from "react";

function ProductCardSkeleton() {
    return (
        <div className="w-72 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden animate-pulse">

            {/* Image Skeleton */}
            <div className="h-60 bg-zinc-800"></div>

            {/* Content Skeleton */}
            <div className="p-5 space-y-4">
                <div className="h-3 w-20 bg-zinc-700 rounded"></div>

                <div className="h-5 w-full bg-zinc-700 rounded"></div>

                <div className="h-5 w-3/4 bg-zinc-700 rounded"></div>

                <div className="flex justify-between items-center pt-2">
                    <div className="h-4 w-16 bg-zinc-700 rounded"></div>

                    <div className="h-6 w-20 bg-zinc-700 rounded"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductCardSkeleton;