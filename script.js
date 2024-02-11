let count =1;

document.getElementById("radios1").checked = true;

setInterval(function(){
nextImage();
}, 2000)

function nextImage(){

count++
if(count > 4){
    count = 1;

}
document.getElementById("radios"+count).checked = true;
}