
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  
    name: string;
    description: string;
}


export default function TargetCard( Props: Props) {
  return (
    <Card className="w-[350px] m-6">
      <CardHeader>
        <CardTitle>{Props.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{Props.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="grid w-full items-center gap-4">
          <Button>View</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
