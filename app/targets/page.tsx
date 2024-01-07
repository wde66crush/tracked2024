'use client'
import TargetCard from './TargetCard'
import { Button } from "@/components/ui/button";  
import { PrismaClient } from '@prisma/client'
import { Input } from "@/components/ui/input";


//declare types
interface Props {
    target: {
      id: string;
      name: string;
      description: string;
    };
  };

//instance prisma client
const prisma = new PrismaClient()


export default async function page(props: Props) {
  const targets = await prisma.target.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  // const thisUser = await prisma.user.findUnique({
  //   where: {
  //     id: "987a8a14-5fd6-4075-aca6-02d021cb894c",
  //   },
  // });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   const newTarget = await prisma.target.create({
  //     data: {
  //       name: "lets get it",
  //       description: "homies only",
  //       author: {
  //         connect: { id: "987a8a14-5fd6-4075-aca6-02d021cb894c" },
  //       },
  //     },
  //   });
  // }
  return (
    <div>
      <h1>Targets</h1>
      <Button
      >Create Target</Button>
      <div className="flex-row">
        {targets.map((target) => (
          <TargetCard key={target.id || ""} name={target.name || ""} description={target.description || ''} />
        ))}
      </div>
    </div>
  );
}
