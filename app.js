const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

// Only start the server if running locally
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

module.exports = app;
