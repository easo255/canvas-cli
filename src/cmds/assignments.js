const axios = require('axios');
const inquirer = require('inquirer');
const url = '';


module.exports = (args) => {

  
//Add url and bearer token
async function fetchData(){
    var result =[];
    await axios.get(`${url}/api/v1/courses?per_page=100&include[]=term`, { headers: { Authorization: `Bearer ${''}` } })  
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