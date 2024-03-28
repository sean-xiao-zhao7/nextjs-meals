import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";

const db = sql("db/seannodis_reviews.db");

export function addReviewDB(reviewDetails) {
    console.log(reviewDetails);
    return db
        .prepare(
            `INSERT INTO reviews (title, description, joint_name, slug) VALUES (?, ?, ?, ?)`
        )
        .run(
            reviewDetails.title,
            xss(reviewDetails.description),
            reviewDetails.joint_name,
            slugify(reviewDetails.slug)
        );
}
