import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

const CartPage = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-10">
      {cartContext?.cart.length === 0 ? (
        <h1 className="font-bold text-3xl">no items in cart</h1>
      ) : (
        cartContext?.cart.map(({ id, quantity, src, title }) => (
          <div
            key={id}
            className="flex p-3 border-b w-full items-center justify-between"
          >
            <img src={src} alt="cart image" className="h-20 w-20" />
            <p>{title}</p>
            <div className="flex items-center gap-2">
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => cartContext.decProduct(id)}
              >
                <MinusIcon />
              </Button>
              <span className="font-bold text-xl">{quantity}</span>
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => cartContext.incProduct(id)}
              >
                <PlusIcon />
              </Button>
            </div>
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={() => cartContext.removeProduct(id)}
            >
              <TrashIcon />
            </Button>
          </div>
        ))
      )}
    </div>
  );
};
export default CartPage;
