const axios = require('axios');
const inquirer = require('inquirer');
const data = require('../config')



module.exports = (args) => {
    var result =[];
    async function fetchData(){
    
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
              axios.get(`${data.canvasUrl}/api/v1/courses/${answers.course_id}/discussion_topics?only_announcements=true`, { headers: { Authorization: `Bearer ${data.canvasToken}` } })  
              .then((response) => {
                
                  response.data.forEach(announcement =>{
                    console.log('Annoucement title: ', announcement.title)
                    console.log('Author: ', announcement.author.display_name)
                    console.log('----------------')
                  })
                  });
            });}
      );

}