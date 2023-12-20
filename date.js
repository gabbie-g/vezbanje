var d = new Date();
document.getElementById("date-time").innerHTML = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " +  
    d.getHours() + ":" +  d.getMinutes();

