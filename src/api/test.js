 const axios = require('./http').instance

 
 axios.get('/api/v1/courses?per_page=100&include[]=term').then(response => {
     console.log(response)
 })