

var songs = ['perfect.mp3','believer.mp3','ran.mp3','naan-un.mp3']

var songtitle=document.getElementById("songtitle");
var fillbar=document.getElementById("fill");

var song = new Audio();
var currentsong = 0;
var start = false;
function playsong(){
	song.src = songs[currentsong];
	songtitle.textContent= songs[currentsong];
	song.play();
	start = true;
}

function play(num){
	currentsong = num-1;
	song.src = songs[currentsong];
	songtitle.textContent= songs[currentsong];
	song.play();
}
function playOrPauseSong(){
		if(start == false){
			song.src = songs[currentsong];
			songtitle.textContent= songs[currentsong];
			song.play();
			start = true;
		}else if(song.paused) {
				song.play();
		}else{
			song.pause();
		}

}
song.addEventListener('timeupdate',function(){
				var position = song.currentTime / song.duration;

				fill.style.width = position * 100 + '%';

})
function nextsong(){
	if(currentsong < 3){
	currentsong++;
	song.src = songs[currentsong];
	songtitle.textContent= songs[currentsong];
	song.play();
	}else{
		currentsong = 0;
		song.src = songs[currentsong];
		songtitle.textContent= songs[currentsong];
		song.play();
	}

}
function prevsong(){
	currentsong--;
	if(currentsong >= 0){
		song.src = songs[currentsong];
		songtitle.textContent= songs[currentsong];
		song.play();
	}else{
		currentsong = 3;
		song.src = songs[currentsong];
		songtitle.textContent= songs[currentsong];
		song.play();

	}
}