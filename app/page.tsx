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

    <h1>Targets</h1>
    <ul>
      {targets.map((target) => (
        <li key={target.id}>
          <h2>{target.name}</h2>
        </li>
      ))}
    </ul>
  </div>
  )
}
