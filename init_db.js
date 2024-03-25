const db = require("better-sqlite3")("seannodis_reviews.db");
db.pragma("journal_mode = WAL");

db.prepare(
    `CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    joint_name TEXT NOT NULL
)`
).run();

const dummy_reviews = [
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
    },
];
