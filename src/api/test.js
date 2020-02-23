 const axios = require('./http').instance

 
 axios.get('/todos/1').then(response => {
     console.log(response)
 })