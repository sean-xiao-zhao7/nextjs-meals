const db = require("better-sqlite3")("seannodis_reviews.db");
db.pragma("journal_mode = WAL");

export function addReviewDB(reviewDetails) {
    return db
        .prepare(
            `INSERT INTO reviews (title, description, joint_name, slug) VALUES (?, ?, ?, ?)`
        )
        .run(
            reviewDetails.title,
            reviewDetails.description,
            reviewDetails.joint_name,
            slugify(reviewDetails.slug, { lower: true })
        );
}
