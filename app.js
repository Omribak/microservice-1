const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

const makeRequest = async (req, res) => {
  const response = await axios.get(
    "http://107.22.38.115/microserviceonename?firstname=omri"
  );
  console.log(response.data);
};
makeRequest();
app.listen(port, () => {
  console.log(`Example Micro Service 1 listening on port ${port}`);
});
