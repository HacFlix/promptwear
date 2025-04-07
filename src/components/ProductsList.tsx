import images from "@/lib/data";
import ProductCard from "./ProductCard";

const ProductsList = ({ limit }: { limit?: number }) => {
  return (
    <div className="flex gap-6 flex-wrap">
      {images.slice(0, limit).map((image) => (
        <ProductCard key={image.id} {...image} />
      ))}
    </div>
  );
};
export default ProductsList;
