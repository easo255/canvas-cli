const axios = require('axios');
const inquirer = require('inquirer');
const data = require('../config')


module.exports = (args) => {

  
//Add url and bearer token
async function fetchData(){
    var result =[];
    await axios.get(`${data.canvasUrl}/api/v1/courses?per_page=100&include[]=term`, { headers: { Authorization: `Bearer ${data.canvasToken}` } })  
    .then((response) => {
        result = response.data
  })
  .catch(error => {
    console.log(error);
  });

  return result;
}

fetchData().then(res =>{
  var names = [];

    res.forEach(element =>{

            names.push(element.course_code)
    
        })

})

}