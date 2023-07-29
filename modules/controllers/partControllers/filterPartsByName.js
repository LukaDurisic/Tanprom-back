const { filterPartsByName } = require("../../data/partQuery");

const filter = async (req, res) => {
  const name = req.params.name;
  const data = await filterPartsByName(name);
  res.send(data);
};

module.exports = filter;
