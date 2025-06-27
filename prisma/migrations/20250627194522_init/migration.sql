-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Debts" (
    "id" TEXT NOT NULL,
    "creditorId" TEXT NOT NULL,
    "debtorId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Debts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Walk" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Walk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Debts" ADD CONSTRAINT "Debts_creditorId_fkey" FOREIGN KEY ("creditorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Debts" ADD CONSTRAINT "Debts_debtorId_fkey" FOREIGN KEY ("debtorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Walk" ADD CONSTRAINT "Walk_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
