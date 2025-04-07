import ProductsList from "@/components/ProductsList";
import { Button } from "@/components/ui/button";
import { SettingsIcon } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-10">
      <div className="flex justify-center items-center gap-4">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Mason"
          alt="profile icon"
          className="h-32 w-32"
        />
        <h3 className="font-bold text-2xl">username___.</h3>
        <Button size={"icon"} variant={"outline"}>
          <SettingsIcon />
        </Button>
      </div>
      <ProductsList limit={5} />
    </div>
  );
};
export default ProfilePage;
