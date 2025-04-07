import { Button } from "@/components/ui/button";
import blackShirt from "../assets/black-shirt.png";
import { MoveRight } from "lucide-react";

const HomePage = () => {
  return (
    <section className="h-screen flex font-poppins px-10">
      <div className="h-full w-1/2 flex items-center justify-center">
        <img src={blackShirt} alt="black shirt" />
      </div>
      <div className="h-full w-1/2 flex gap-10 flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-14 text-center">
          Design Your Own{" "}
          <span className="p-2 border-b-2 border-b-purple-500 text-purple-500">
            AI-Powered
          </span>{" "}
          T-Shirt, level up your creativity through{" "}
          <span className="p-2 border-b-2 border-b-purple-500 text-purple-500">
            prompts
          </span>{" "}
          and let us handle the rest
        </h1>
        <Button variant={"destructive"} size={"lg"}>
          start creating <MoveRight />
        </Button>
      </div>
    </section>
  );
};
export default HomePage;
