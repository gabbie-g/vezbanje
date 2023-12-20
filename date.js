var d = new Date();
document.getElementById("date").innerHTML = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();

document.getElementById("time").innerHTML = d.getHours() + ":" +  d.getMinutes();
