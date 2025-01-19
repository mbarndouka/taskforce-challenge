import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    return 'Connected to the Database ✅ ';
  } catch (error) {
    throw { message: 'Database connection failed', error };
  } finally {
    await prisma.$disconnect();
  }
}

export { connectDB, prisma as default };
