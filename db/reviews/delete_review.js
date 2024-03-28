import sql from "better-sqlite3";
const db = sql("db/seannodis_reviews.db");

export function deleteReviewDB(slug) {
    return db.prepare(`DELETE FROM reviews WHERE slug = ?`).run(slug);
}
