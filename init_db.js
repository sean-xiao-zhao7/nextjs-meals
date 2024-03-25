const db = require("better-sqlite3")("seannodis_reviews.db");
db.pragma("journal_mode = WAL");
