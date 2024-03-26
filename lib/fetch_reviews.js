import sql from "better-sqlite3";

const db = sql("db/seannodis_reviews.db");

const fetchAllReviews = () => {
    return db.prepare(`select * from reviews`).all();
};

export const fetchOneReviewBySlug = (slug) => {
    return db.prepare(`select * from reviews where slug = ?`).get(slug);
};

export default fetchAllReviews;
