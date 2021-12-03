import { PrismaClient, Quote } from "@prisma/client";

const prisma = new PrismaClient();

const quotes: Omit<Quote, "id">[] = [
  {
    text: "The greatest discovery of any generation is that human beings can alter their lives by altering the attitudes of their minds.",
    author: 'Albert Schweitzer',
    source: "https://www.antarcticajournal.com/albert-schweitzer-quote-attitudes-of-the-mind/",
  },
  {
    text: "I have no special talent. I am only passionately curious.",
    author: 'Albert Einstein',
    source: "https://wisdomquotes.com/famous-quotes/",
  },
  {
    text: "If you judge people, you have no time to love them.",
    author: 'Mother Teresa',
    source: "https://wisdomquotes.com/famous-quotes/",
  },
  {
    text: "Yeah, I have a lot of questions. Number one: how dare you?",
    author: 'Kelly Kapoor',
    source: "https://quotecatalog.com/quotes/tv/the-office/page/2",
  }
]

async function main() {
  await prisma.quote.deleteMany({});
  await prisma.quote.createMany({
    data: quotes
  });

  console.log("Seeded data.");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
