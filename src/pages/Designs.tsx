import ProductsList from "@/components/ProductsList";

const DesignsPage = () => {
  return (
    <div className="h-auto flex flex-col py-20 gap-5">
      <h1 className="font-bold text-3xl">Recent Designs</h1>
      <ProductsList />
    </div>
  );
};
export default DesignsPage;
