const db = require("better-sqlite3")("seannodis_reviews.db");
db.pragma("journal_mode = WAL");

// define tables

db.prepare(
    `CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    joint_name TEXT NOT NULL
)`
).run();

// insert dummy reviews

const dummy_reviews = [
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
        slug: "pnn0",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
        slug: "pnn1",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
        slug: "pnn2",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
        slug: "pnn3",
    },
    {
        title: "Pho",
        description: "Pho",
        joint_name: "Pho Ngoc Nen",
        slug: "pnn4",
    },
];

const insert_one_review = db.prepare(`
        insert into reviews (title, description, joint_name, slug) 
        values (@title, @description, @joint_name, @slug)
`);
const insertDummies = db.transaction((dummy_reviews) => {
    for (const review of dummy_reviews) {
        insert_one_review.run(review);
    }
});

insertDummies(dummy_reviews);
