function runTimer(){
    setInterval(function(){
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
    },5000)
   
    
}

runTimer()