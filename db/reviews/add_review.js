import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";

const db = sql("db/seannodis_reviews.db");

export function addReviewDB(reviewDetails) {
    // make image name with random value
    const extension = reviewDetails.image_path.split(".").pop();
    const randomStr = Math.floor(Math.random() * 10000);
    const filename = `${reviewDetails.slug + randomStr}.${extension}`;

    return db
        .prepare(
            `INSERT INTO reviews (title, description, joint_name, slug, image_path) VALUES (?, ?, ?, ?, ?)`
        )
        .run(
            reviewDetails.title,
            xss(reviewDetails.description),
            reviewDetails.joint_name,
            slugify(reviewDetails.slug),
            filename
        );
}
