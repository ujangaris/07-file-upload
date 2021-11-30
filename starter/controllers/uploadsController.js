const { StatusCodes } = require('http-status-codes');

const uploadProductImage = async (req, res) => {
  console.log(req);
  res.send('upload product Image');
};

module.exports = {
  uploadProductImage,
};
