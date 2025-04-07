import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import CartBtn from "./CartBtn";

const ProductCard = ({
  id,
  title,
  src,
}: {
  id: number;
  title: string;
  src: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>$24</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={src} alt="image" className="w-48 h-48 rounded-md" />
      </CardContent>
      <CardFooter>
        <CartBtn id={id} title={title} src={src} />
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
