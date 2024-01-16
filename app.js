const express = require('express')
const axios = require('axios')
const app = express()
const port = 3001

const makeRequest = async (req, res) =>{
  const response = await axios.get('http://localhost:3000/microserviceonename?firstname=omri');
  console.log(response.data)
}
const requestFromUser = () =>{
  let choice  = '';
  console.log("Invoke request ? Y/N ");
  prompt(choice);
  switch(choice){
    case 'Y':
      makeRequest();
      break;
      default:
        console.log("thank you have a nice day.");
        break;
      }
      return;
}
requestFromUser();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})