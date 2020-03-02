const inquirer = require('inquirer');
const data = require('../config');
const ora = require('ora');
var striptags = require('striptags'); 
const axios = require('../api/http').instance




module.exports = (args) => {
    var result =[];
    async function fetchData(){
        const spinner = ora().start();
        await axios.get('/api/v1/courses?per_page=100&include[]=term')  
        .then((response) => {
            response.forEach(element => {
              var end_at = new Date(element.term['end_at']);
                var courseData = {
                  name: element.course_code,
                  value: element.id
                }
                result.push(courseData)
            
              
             
            });
          
            
        })
        .catch(error => {
        });
        spinner.stop();
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
              let filter = 'unread';
              if(args.all){
                filter = 'all';
              }

              axios.get(`/api/v1/courses/${answers.course_id}/discussion_topics?only_announcements=true&filter_by=${filter}`)  
              .then((response) => {
                if(response.length > 0 ){
                  response.forEach(announcement =>{
                    console.log('Date', new Date(announcement.created_at).toLocaleDateString())
                    console.log('Title: ', announcement.title)
                    console.log('------------------------------')
                    console.log('Message: ', striptags(announcement.message))
                    console.log('Author: ', announcement.author.display_name)
                    console.log('------------------------------')
                    console.log('id', answers.course_id)
                    if(announcement.read_state == 'unread'){
                      axios.put(`/api/v1/courses/${answers.course_id}/discussion_topics/${announcement.id}/read`)
                    }
                  })
                }else{
                  console.log("No unread announcements")
                }

                  }).catch();
            });}
      );

}