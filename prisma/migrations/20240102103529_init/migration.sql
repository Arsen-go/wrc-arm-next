-- CreateTable
CREATE TABLE `contact_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(120) NOT NULL,
    `name` VARCHAR(120) NULL,
    `text` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `donations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(120) NOT NULL,
    `address` VARCHAR(120) NOT NULL,
    `firstName` VARCHAR(120) NOT NULL,
    `lastName` VARCHAR(120) NOT NULL,
    `paymentMethod` VARCHAR(120) NOT NULL,
    `recurrence` VARCHAR(120) NOT NULL,
    `zipCode` VARCHAR(120) NOT NULL,
    `donationAmount` INTEGER NOT NULL,
    `customAmount` INTEGER NOT NULL,
    `message` TEXT NOT NULL,
    `anonymous` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
