import { PrismaClient } from "@prisma/client";



// Add index signature to globalThis type declaration
declare global {
  var prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {  
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;