const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
  res.status(200).json({ data: "backend app is working." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
