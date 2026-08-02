
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { useProductAPI } from '../hooks/productHook';


function ShopPage() {

    let { isPending, data } = useProductAPI();

    return (
        <div className="min-h-screen bg-black p-8">
            <Filters />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {isPending
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    : data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    )
}

export default ShopPage
