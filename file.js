var song = document.getElementById("sound")
var icon = document.getElementById("icon")

icon.onclick = function() {
    if(song.paused){
        song.play();
        icon.src = "images/download.png"
    } else {
        song.pause();
        icon.src = "images/1.webp"
    }
}