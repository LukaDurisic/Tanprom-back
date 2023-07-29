const { getPartManufacturer } = require("../../data/partQuery");

const getPartMan = async (req, res) => {
  const data = await getPartManufacturer;
  res.send(data);
};

module.exports = getPartMan;
