import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

async function getTargets() {
  const targets = await prisma.target.findMany(
  )
  return targets
}

export default async function Home() {
  const targets = await getTargets()
  console.log({ targets })
  return (<div>
    Howdy
  </div>
  )
}
