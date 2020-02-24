const axios = require('axios');
const qs = require('qs')
const configData = require('../config')
      
function parseError (messages) {
    // error
    if (messages) {
      if (messages instanceof Array) {
        return Promise.reject({ messages: messages })
      } else {
        return Promise.reject({ messages: [messages] })
      }
    } 
  }
  
  function parseBody (response) {
    //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
     if (response.status === 200) {    
      return response.data
    } else {
      return this.parseError(response.data.messages)
    }
  }

  let instance = axios.create({
    baseURL: `${configData.baseURL}`
  })
  instance.interceptors.request.use((config) => {
    config. headers= { Authorization: `Bearer ${configData.Token}` } 
    return config
  }, error => {
    return Promise.reject(error)
  })
  
  instance.interceptors.response.use((response) => {
      return parseBody(response)
  }, error => {
    console.warn('Error status', error.response.status)
    if (error.response) {
      return parseError(error.response.data)
    } else {
      return Promise.reject(error)
    }
  })
 
  exports.instance = instance;
  
  
   
  
   
  
  
   