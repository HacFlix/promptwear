import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const CartBtn = ({
  id,
  title,
  src,
}: {
  id: number;
  title: string;
  src: string;
}) => {
  const cartSetter = useContext(CartContext);
  function addToCart() {
    cartSetter?.addToCart({ id, title, src });
  }
  return (
    <Button variant={"outline"} onClick={addToCart}>
      add to cart <ShoppingCartIcon />
    </Button>
  );
};
export default CartBtn;
