var d = new Date();
document.getElementById("date").innerHTML = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();

if(d.getMinutes() < 10){
    document.getElementById("time").innerHTML = d.getHours() + ":" + "0" + d.getMinutes();
}else{
    document.getElementById("time").innerHTML = d.getHours() + ":" +  d.getMinutes();
}
