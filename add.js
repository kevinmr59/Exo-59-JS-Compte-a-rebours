let chrono= document.getElementById("title")
function decrementer(){
    if (chrono.innerHTML>0){
        chrono.innerHTML--;
        setTimeout(decrementer, 1000)
    }

}
setTimeout(decrementer,1000);