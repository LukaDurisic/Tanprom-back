const { getAllParts } = require("../../data/partQuery");

const getAll = async (req, res) => {
  const data = await getAllParts;
  res.send(data);
};

module.exports = getAll;
