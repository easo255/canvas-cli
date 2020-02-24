const inquirer = require('inquirer');
const data = require('../config')
const axios = require('../api/http').instance



module.exports = (args) => {
var result =[];
async function fetchData(){

    await axios.get('/api/v1/courses?per_page=100&include[]=term')  
    .then((response) => {
        response.forEach(element => {
          var end_at = new Date(element.term['end_at']);
          if(end_at > new Date()){
            var courseData = {
              name: element.course_code,
              value: element.id
            }
            result.push(courseData)
          }
          
         
        });
      
        
    })
    .catch(error => {
    });

    return result;
  }

  fetchData().then( result => {
    inquirer
        .prompt([
          {
            type:'list',
            name:'course_id',
            message:'Select subject:',
            choices:result
          }
        ])
        .then(answers => {
          axios.get(`/api/v1/courses/${answers.course_id}/assignments`)  
          .then((response) => {
            
              response.forEach(assignment =>{
                console.log('Assignment name: ', assignment.name)
                console.log('Due at: ',new Date(assignment.due_at).toLocaleDateString())
                console.log('----------------')
              })
              });
        });}
  );


}

