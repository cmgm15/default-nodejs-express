const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Default backend image"));
app.get("/health_check", (req, res) => res.send("Healthy"));

app.listen(port, () => console.log(`Default backend running in port ${port}`));
