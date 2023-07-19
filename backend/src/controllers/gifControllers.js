require("dotenv").config();
const axios = require("axios");

const { API_KEY, API_URL } = process.env;

const browseBySearchQuery = (req, res) => {
  axios
    .get(`${API_URL}?api_key=${API_KEY}&q=${req.query.q}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browseBySearchQuery,
};
