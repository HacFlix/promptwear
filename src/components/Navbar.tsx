import { Link, NavLink } from "react-router";
import { Button } from "./ui/button";
import { FingerprintIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const links = [
  {
    label: "home",
    to: "/",
  },
  {
    label: "designs",
    to: "/designs",
  },
];

const Navbar = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className="flex bg-white justify-between px-10 h-14 items-center sticky top-4 shadow-md rounded-md ">
      <Link to={"/"} className="text-2xl">
        <span className="font-bold">Prompt</span>
        <span className="italic text-purple-500 text-xl">Wear.</span>
      </Link>
      <nav className="flex uppercase absolute left-[50%] -translate-x-[50%]">
        {links.map((link) => (
          <Button key={link.label} asChild variant={"ghost"}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </Button>
        ))}
      </nav>
      <div className="flex gap-4 items-center">
        <Button variant={"outline"} asChild>
          <Link to={"/login"}>
            <FingerprintIcon />
            LOGIN
          </Link>
        </Button>
        <Button variant={"default"} asChild>
          <Link to={"/create"}>
            <PlusIcon /> create
          </Link>
        </Button>
        <div className="relative">
          <Button variant={"outline"} size={"icon"} asChild>
            <Link to={"/cart"}>
              <ShoppingCartIcon />
            </Link>
          </Button>
          <span className="absolute -top-2 -right-3 rounded-full h-6 w-6 text-white  bg-purple-400 items-center justify-center flex text-[12px]">
            {cartContext?.cart.length}
          </span>
        </div>

        <Link
          title="profile"
          to={"/profile"}
          className=" w-12 h-12 flex items-center justify-center border-2 border-purple-500 hover:bg-purple-500 transition-colors rounded-full"
        >
          <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Mason"
            alt="profile icon"
            className="h-10 w-10
            "
          />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
