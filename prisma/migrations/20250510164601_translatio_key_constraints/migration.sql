/*
  Warnings:

  - A unique constraint covering the columns `[projectId,key]` on the table `TranslationKey` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TranslationKey_projectId_key_key" ON "TranslationKey"("projectId", "key");
