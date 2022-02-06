let numbeTimer = document.querySelector(".timer__number");
let buttonTimerFirst = document.querySelector(".first__button");
let buttonTimerSecond = document.querySelector(".second__button");

let timeCurruent = true;




class Timer {
	constructor(timeToFinish,button){
		this.timeToFinish = timeToFinish;
		this.button = button;
		this.timer;
	}
	get(){
		console.log(this.timeToFinish);
		return this.timeToFinish;
	}
	startTimer(){
		let self = this;
		this.timer = setInterval(function () {
			self.button.innerHTML = `${Math.trunc(self.timeToFinish/60/60%60)}:${Math.trunc(self.timeToFinish/60%60)}:${Math.trunc(self.timeToFinish%60)}`;
			self.timeToFinish--;
			if((self.get()) < 0) {
				self.stopTimer();
				self.timeToFinish = 0;
				alert("Time out");
				window.location.reload()
			}
		}, 1000);
	}
	stopTimer(){
		clearInterval(this.timer);
	}
}


function main(){
	timeNumber = prompt("How many minutes do you need ?",3);
	if(!timeNumber)timeNumber = 5;
	timeNumber *= 60;
	let timeFirst = new Timer(timeNumber,buttonTimerFirst);
	let timeSecond = new Timer(timeNumber,buttonTimerSecond);

	buttonTimerFirst.addEventListener('click', function() { 
		if(timeCurruent){
			timeSecond.startTimer();
			buttonTimerSecond.classList.toggle("_active");
			buttonTimerFirst.classList.remove("_active");
			timeFirst.stopTimer();
			timeCurruent = false;
		}
			
	});
	buttonTimerSecond.addEventListener('click', function() { 
		if(!timeCurruent){
			timeFirst.startTimer();
			buttonTimerSecond.classList.remove("_active");
			buttonTimerFirst.classList.toggle("_active");
			timeSecond.stopTimer();
			timeCurruent = true;
			console.log("ddddddd",timeFirst.get());
		}
	});
	
}
main();




