/*
  Warnings:

  - A unique constraint covering the columns `[translationKeyId,languageId]` on the table `Translation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Translation_translationKeyId_languageId_key" ON "Translation"("translationKeyId", "languageId");
