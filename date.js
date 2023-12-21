
requestAnimationFrame(date);


function date(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.toLocaleDateString();  
    document.getElementById("time").innerHTML = d.toLocaleTimeString();  

    requestAnimationFrame(date);
};

