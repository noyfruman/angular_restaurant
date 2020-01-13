const socket = require('socket.io');



socket.on('message',(meal)=>{

    console.log(meal);
    //render template from server to html template in script messages
    const html = Mustache.render(messageTemplate,{
        name: meal.name,
        description : meal.description
    });

    //$messages.insertAdjacentHTML('beforeend',html)

});