const { PrismaClient } = require('@prisma/client');
const data = require('./mock-data.json');
const prisma = new PrismaClient();

type JobSeed = {
  createdAt: Date;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

async function main() {
  const clerkId = 'user_2x5GQiGQjknSFWH4fEtcBy6n0r9';
  const jobs = data.map((job: JobSeed) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
