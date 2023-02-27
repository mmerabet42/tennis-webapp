-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "shortname" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "countryPictureUrl" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerTitle" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,

    CONSTRAINT "PlayerTitle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayerTitle" ADD CONSTRAINT "PlayerTitle_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
