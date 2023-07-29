const { getUnavailableParts } = require("../../data/partQuery");

const getUnavailable = async (req, res) => {
  const data = await getUnavailableParts;
  res.send(data);
};

module.exports = getUnavailable;
