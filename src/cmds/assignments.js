const axios = require('axios');
const inquirer = require('inquirer');
const data = require('../config')
const ora = require('ora')


module.exports = (args) => {
var result =[];
async function fetchData(){
  const spinner = ora().start();

    await axios.get(`${data.canvasUrl}/api/v1/courses?per_page=100&include[]=term`, { headers: { Authorization: `Bearer ${data.canvasToken}` } })  
    .then((response) => {
        response.data.forEach(element => {
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

    spinner.stop()
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
          axios.get(`${data.canvasUrl}/api/v1/courses/${answers.course_id}/assignments`, { headers: { Authorization: `Bearer ${data.canvasToken}` } })  
          .then((response) => {
            
              response.data.forEach(assignment =>{
                console.log('Assignment name: ', assignment.name)
                console.log('Due at: ',new Date(assignment.due_at).toLocaleDateString())
                console.log('----------------')
              })
              });
        });}
  );


}

