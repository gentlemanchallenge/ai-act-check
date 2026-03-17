// Simple script to create tables if they don't exist
// Uses raw SQL since we can't rely on prisma CLI in standalone mode

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Initializing database...');

  // Create enums and tables using raw SQL
  await prisma.$executeRawUnsafe(`
    DO $$ BEGIN
      CREATE TYPE "RiskLevel" AS ENUM ('PROHIBITED', 'HIGH_RISK', 'LIMITED_RISK', 'MINIMAL_RISK', 'GPAI', 'NOT_AI');
    EXCEPTION WHEN duplicate_object THEN null;
    END $$;
  `);

  await prisma.$executeRawUnsafe(`
    DO $$ BEGIN
      CREATE TYPE "UserRole" AS ENUM ('PROVIDER', 'DEPLOYER', 'BOTH', 'IMPORTER', 'DISTRIBUTOR');
    EXCEPTION WHEN duplicate_object THEN null;
    END $$;
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AISystem" (
      "id" TEXT NOT NULL,
      "sessionId" TEXT,
      "name" TEXT NOT NULL,
      "description" TEXT,
      "riskLevel" "RiskLevel",
      "userRole" "UserRole",
      "classificationPath" JSONB,
      "obligations" JSONB,
      "checkCompletedAt" TIMESTAMP(3),
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "AISystem_pkey" PRIMARY KEY ("id")
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "AISystem_sessionId_idx" ON "AISystem"("sessionId");
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Subscriber" (
      "id" TEXT NOT NULL,
      "email" TEXT NOT NULL,
      "aiSystemId" TEXT,
      "source" TEXT NOT NULL DEFAULT 'result_page',
      "confirmed" BOOLEAN NOT NULL DEFAULT false,
      "confirmToken" TEXT,
      "remindersSent" INTEGER NOT NULL DEFAULT 0,
      "lastReminderAt" TIMESTAMP(3),
      "unsubscribed" BOOLEAN NOT NULL DEFAULT false,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "Subscriber_email_key" ON "Subscriber"("email");
  `);

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "Subscriber_confirmToken_key" ON "Subscriber"("confirmToken");
  `);

  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "Subscriber_email_idx" ON "Subscriber"("email");
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "CheckCount" (
      "id" TEXT NOT NULL,
      "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "riskLevel" "RiskLevel" NOT NULL,
      "userRole" "UserRole",
      "count" INTEGER NOT NULL DEFAULT 1,
      CONSTRAINT "CheckCount_pkey" PRIMARY KEY ("id")
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "CheckCount_date_riskLevel_userRole_key" ON "CheckCount"("date", "riskLevel", "userRole");
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AdminReminder" (
      "id" TEXT NOT NULL,
      "taskId" TEXT NOT NULL,
      "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "AdminReminder_pkey" PRIMARY KEY ("id")
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "AdminReminder_taskId_key" ON "AdminReminder"("taskId");
  `);

  console.log('Database initialized successfully.');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('DB init error:', e);
  process.exit(0); // Don't block app startup
});
