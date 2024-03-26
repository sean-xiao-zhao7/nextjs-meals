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
        description:
            "Best pho and best dining experience in Sauga, and perhaps beyond. It's hard to maintain consistent quality and service over large geographical and temporal gaps, and even the attitude of the staff oozes an air of sophistication that is peerless. A must visit of the food tour of GTA. Head and shoulders above the average Pho experience. Bravo to the owners.",
        joint_name: "Pho Ngoc Yen",
        slug: "pny-pho",
    },
    {
        title: "IHOP",
        description:
            "The usual breakfast experience similar to other breakfast joints in the GTA. The name doesn't raise the bar, though menu has a few unique quirks. You got pancake, you got omelette, you got burrito. You don't get the wrapping arms around you embracing love you get down south from Mountain Mama on Country Road. You visit for breakfast craving, you get satisf",
        joint_name: "Pho Ngoc Nen",
        slug: "ihop-breakfast",
    },
    {
        title: "Tsui Xiang Tsuen",
        description:
            "You crave dat Hong Kong mushu meat, you get hot and fresh meat and veggies steaming out of the wazzoo. You spend less for more, when few words are exchanged and understanding is achieved. You eat to fill and leftovers for next day, like Seinfeld episode.",
        joint_name: "Pho Ngoc Nen",
        slug: "txt-chinese",
    },
    {
        title: "Matt's Burger Lab Etobicoke",
        description:
            "Hidden gem burger joint, legit burger fix for your cravings. Bacon crispy on point, price competitive, puts Burger King and McDonald's to shame. Milkshake game proper. Small sitting area, best have it to go. \
        Daily burger dosage is doable, reminiscent of pre-inflation values, which are greatly appreciated.",
        joint_name: "Pho Ngoc Nen",
        slug: "mattb-burger",
    },
    {
        title: "Harvey's",
        description:
            "Very cozy Harv's, properly grilled burger with your choice of toppings. Large dining area with plants for the ambiance. Feels like old school shack. Burger cooked well, slushies mixed ok. Good to eat.",
        joint_name: "Pho Ngoc Nen",
        slug: "harvey-burger",
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
