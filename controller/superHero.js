const { phoneMapping } = require("../helper");
const numberMapping = {
  1: ["@", ".", "?"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: ["Zero"]
};
const allHeroes = [
  "SUPERMAN",
  "THOR",
  "ROBIN",
  "IRONMAN",
  "GHOSTRIDER",
  "CAPTAINAMERICA",
  "FLASH",
  "WOLVERINE",
  "BATMAN",
  "HULK",
  "BLADE",
  "PHANTOM",
  "SPIDERMAN",
  "BLACKWIDOW",
  "HELLBOY",
  "PUNISHER"
];
const getHero = (req, res) => {
  const { phoneCode } = req.body;
  allHeroes.map(name => {
    name
      .toLowerCase()
      .split("")
      .map(nameChar => {
        console.log("here is name Chat", nameChar);
      });
    // name
    //   .toLowerCase()
    //   .split("")
    //   .map(nameChar => {
    //     Object.keys(numberMapping).find(number => {
    //       numberMapping[number].includes(number);
    //     });
    //   });
  });
  //   if (phoneCode in phoneMapping) {
  //     return res.status(200).json({
  //       status: 200,
  //       message: phoneMapping[phoneCode]
  //     });
  //   } else {
  //     return res.status(200).json({
  //       status: 404,
  //       message: "NO HERO FOUND"
  //     });
  //   }
};

module.exports = {
  getHero
};
