const musicContainer = document.querySelector('#music-container');
const playBtn = document.querySelector('#playBtn');
const backBtn = document.querySelector('#backBtn');
const fwdBtn = document.querySelector('#fwdBtn');
const audio = document.querySelector('#audio');
const progressContainer = document.querySelector('#progress-container');
const progress = document.querySelector('#progress');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song Titles 
const songs = [ 'Clash', 'Pin Pin', 'Loch Ness', 'Nuevo Comienzo']

// Keep track of songs 
let songIndex = 0; 

// Initially load songs 
loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/music/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.setAttribute('name', 'pause-outline')

    audio.play()
    
}
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.setAttribute('name', 'play-sharp')

    audio.pause()

}

function previousSong(){
    songIndex--

    if(songIndex < 0){
      songIndex = songs.length - 1 
    }

    loadSong(songs[songIndex])

    playSong()

}

function nextSong(){
    songIndex++

    if(songIndex > songs.length - 1){
      songIndex = 0
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e){

    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

}

// Event listeners 
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

// Change Song Events 
backBtn.addEventListener('click', previousSong)
fwdBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

// Song ends
audio.addEventListener('ended', nextSong);
