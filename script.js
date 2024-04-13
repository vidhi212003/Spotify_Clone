console.log("Welcome to my music");
let songIndex=0;
let audioElement=new Audio('128-Hai Dil Ye Mera - Hate Story 2 128 Kbps.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementByClassName('songItem'));


let songs=[
    {songName:"Hai Dil Ye Mera",filePath:"128-Hai Dil Ye Mera - Hate Story 2 128 Kbps.mp3",coverPath:"cover1.png"},
    {songName:"O Mahi O Mahi",filePath:"song2.mp3",coverPath:"cover1.png"},
    {songName:"Gujaria",filePath:"song3.mp3",coverPath:"cover1.png"},
    {songName:"Tu Hi Yaar Mera",filePath:"song4.mp3",coverPath:"cover1.png"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//listen to events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||  audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})