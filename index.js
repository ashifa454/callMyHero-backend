const app = require("express")();
const { SuperHeroController } = require("./controller");
const cors = require("cors");
const bodyParser = require("body-parser");

const SERVER_PORT = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    body: "AVAILABLE"
  });
});
app.post("/callMyHero", SuperHeroController.getHero);
app.listen(SERVER_PORT, err => {
  if (err) {
    throw new Error("Fail to Listen", err);
  }
  console.log("LISTING ON ", SERVER_PORT);
});
