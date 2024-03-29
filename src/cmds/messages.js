const axios = require('../api/http').instance

//Add url and bearer token from canvas
module.exports = (args) => {
    var messages = [];
    axios.get( 'api/v1/conversations')  
    .then(response => {
    for(i = 0; i< response.length; i++){
        if(!response[i].workflow_state == 'read'){
            messages.push(response[i])
        }
    }

    if(messages.length !=0){
        for(i = 0; i< messages.length; i++){
            console.log('-----------------')
            console.log('Subject: ', messages[i].subject)
            for(p=0;p< messages[i]['participants'].sort((a, b) => b - a).slice(0,5).length;p++){
                console.log('Participants: ', messages[i]['participants'][p].name)
            }
            if(messages[i]['participants'].length >5){
                console.log('...')
            }
            console.log('Date: ', new Date(messages[i].last_message_at).toLocaleDateString())
            console.log('-----------------')
        }
    }else{
        console.log('no new messages')
    }
  })
  .catch(error => {
    console.log(error);
  });
  }