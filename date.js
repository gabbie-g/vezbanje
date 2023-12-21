var d = new Date();
if(d.getDate() < 10){
    document.getElementById("date").innerHTML = "0" + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
}else if(d.getMonth() < 9){
    document.getElementById("date").innerHTML = d.getDate() + ".0" + (d.getMonth() + 1) + "." + d.getFullYear();
} else if(d.getDate() < 10 && d.getMonth() < 9){
    document.getElementById("date").innerHTML = d.getDate() + ".0" + (d.getMonth() + 1) + "." + d.getFullYear();
} else {
    document.getElementById("date").innerHTML = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
}

if(d.getHours() < 10){
    document.getElementById("time").innerHTML = "0" + d.getHours() + ":" + d.getMinutes();
}else if(d.getMinutes() < 10){
    document.getElementById("time").innerHTML = d.getHours() + ":" + "0" + d.getMinutes();
}else if(d.getHours() < 10 && d.getMinutes() < 10){
    document.getElementById("time").innerHTML =  "0" + d.getHours() + ":" + "0" + d.getMinutes();
}else{
    document.getElementById("time").innerHTML = d.getHours() + ":" +  d.getMinutes();
}
