import sql from "better-sqlite3";

const db = sql("db/seannodis_reviews.db");

const fetchAllReviews = () => {
    const result = db.prepare(`select * from reviews`).all();
    return result;
};

export default fetchAllReviews;
