const video = document.getElementById('video');
const progress = document.getElementById("progress");
const timer = document.getElementById("timer");

function start() {
    queries();
    video.play();
    progressLoop();
}

function queries() {
    $('#row-play').css('display', 'none');
    $('#row-btns').css('display', 'block');
    $('.progreso').css('display', 'block');
    $('.title').css('display', 'block');
    $("#player").mouseenter(function() { 
        $('#row-btns').css('display', 'block'); 
        $('.progreso').css('display', 'block'); 
        $('.title').css('display', 'block');
    });
    $("#player").mouseleave(function() { 
        $('#row-btns').css('display', 'none'); 
        $('.progreso').css('display', 'none'); 
        $('.title').css('display', 'none');
    });
}

function queryPause() {
    $("#player").off("mouseenter mouseleave");
    $('#row-play').css('display', 'block');
    $('#row-btns').css('display', 'none');
    $('.progreso').css('display', 'none');
    $('.title').css('display', 'none');
}

function pause() {
    queryPause();
    video.pause();
}

function skip(value) {
    video.currentTime += value;
}      

function progressLoop() {
    setInterval(function() { 
        progress.value = Math.round((video.currentTime / video.duration) * 100); 
        console.log(progress.value);
        let duracion = Math.round(video.currentTime); 
        timer.innerHTML = secondsToString(duracion); 
        if(window.innerWidth <= 768){
            if(progress.value >= 6 && progress.value <= 81){
                timer.style.marginLeft = (progress.value - 3) + '%';
            }
        } else{
            if(progress.value >= 6 && progress.value <= 91){
                timer.style.marginLeft = (progress.value - 3) + '%';
            }
        }
    }, 1000);
}

function secondsToString(seconds) {
    let minute = Math.floor((seconds / 60) % 60);
    minute =(minute < 10)? '0' + minute: minute;
    let second = seconds % 60;
    second =(second < 10)? '0' + second: second;
    return minute + ':' + second;
}
