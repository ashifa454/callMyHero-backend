const { phoneMapping } = require("../helper");
const getHero = (req, res) => {
  const { phoneCode } = req.body;
  console.log(phoneCode);
  if (phoneCode in phoneMapping) {
    return res.status(200).json({
      status: 200,
      message: phoneMapping[phoneCode]
    });
  } else {
    return res.status(200).json({
      status: 404,
      message: "NO HERO FOUND"
    });
  }
};

module.exports = {
  getHero
};
