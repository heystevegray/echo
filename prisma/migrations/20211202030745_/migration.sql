-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT,
    "link" TEXT,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);
