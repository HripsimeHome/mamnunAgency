import dotenv from "dotenv";
import { app } from "./app.js";
import { db } from "./src/db.js";

dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  process.exit(1);
});

db.sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => console.error("Unable to connect to the database:", error));

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`App is running on port ${port}`)
);

process.on("unhandledRejection", (err) => {
  server.close(() => {
    process.exit(1);
  });
});
