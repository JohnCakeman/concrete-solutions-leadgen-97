
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export interface PlantProps {
  id: number;
  name: string;
  type: string;
  productivity: string;
  price: string;
  image: string;
  features: string[];
  onRequestQuote: (plantId: number, plantName: string) => void;
}

const CatalogItem = ({
  id,
  name,
  type,
  productivity,
  price,
  image,
  features,
  onRequestQuote,
}: PlantProps) => {
  return (
    <Card className="h-full flex flex-col animate-fade-in">
      <div className="relative overflow-hidden h-52 sm:h-60">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-blue-800 text-white px-3 py-1 rounded-md text-sm font-medium">
          {type}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-concrete-900">{name}</CardTitle>
        <CardDescription>Производительность: {productivity}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-1 text-concrete-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 border-t pt-4">
        <div>
          <p className="text-sm text-concrete-500">Стоимость от</p>
          <p className="text-2xl font-bold text-concrete-900">{price} ₽</p>
        </div>
        <Button 
          className="w-full bg-cta hover:bg-cta-hover flex items-center justify-center gap-2"
          onClick={() => onRequestQuote(id, name)}
        >
          <span>Запросить КП</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogItem;
