import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

const AuthCard = ({ type }: { type: "login" | "signup" }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-3xl uppercase font-bold">
          {type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 flex-col">
          <Input placeholder="username" className="w-md" />
          <Input placeholder="password" />
          <Button variant={"default"}>{type}</Button>
        </div>
      </CardContent>
      <CardFooter>
        {type === "login" ? (
          <span>
            do not have a account ?{" "}
            <Link to={"/signup"} className="text-purple-500 underline">
              signup
            </Link>
          </span>
        ) : (
          <span>
            already have a account ?{" "}
            <Link to={"/login"} className="text-purple-500 underline">
              login
            </Link>
          </span>
        )}
      </CardFooter>
    </Card>
  );
};
export default AuthCard;
