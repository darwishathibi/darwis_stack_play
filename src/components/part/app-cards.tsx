import { Card, CardTitle, CardDescription, CardContent } from "../ui/card";
import { CircleDollarSign, ShoppingBag, User, Box } from "lucide-react";

const data = [
  {
    title: "Total Revenue",
    description: "$250,000",
    icon: CircleDollarSign,
    increase: "+10% from last month",
  },
  {
    title: "Total Orders",
    description: "2,500",
    icon: ShoppingBag,
    increase: "+25% from last month",
  },
  {
    title: "Total Customers",
    description: "1,000",
    icon: User,
    increase: "+5% from last month",
  },
  {
    title: "Total Products",
    description: "500",
    icon: Box,
    increase: "+15% from last month",
  },
];

export default function AppCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <Card key={item.title} className="pt-4">
          <CardContent>
            <div className="flex items-center justify-between">
              <CardTitle>{item.title}</CardTitle>
              <item.icon className="w-5 h-5 text-gray-500" />
            </div>
            <CardDescription>{item.description}</CardDescription>
            <p className="text-sm text-gray-500">{item.increase}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
