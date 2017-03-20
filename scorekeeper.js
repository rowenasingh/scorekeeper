// player one button
var p1button = document.getElementById("playerone");
var p1score = document.getElementById("displayp1")
var p1initialscore = 0;
p1score.innerHTML = p1initialscore;

p1button.addEventListener("click", function() {
	if (p1score.innerHTML !== maxscore.value) {
		p1initialscore++;
		p1score.innerHTML = p1initialscore;
		if (p2score.innerHTML !== maxscore.value) {
			p1initialscore++;
			p1score.innerHTML = p1initialscore;
		}
	}
});

// player two button
var p2button = document.getElementById("playertwo");
var p2score = document.getElementById("displayp2")
var p2initialscore = 0;
p2score.innerHTML = p2initialscore;
p2button.addEventListener("click", function() {
	if (p2score.innerHTML !== maxscore.value) {
		p2initialscore++;
		p2score.innerHTML = p2initialscore;
	}
});

// reset button
var reset = document.getElementById("reset");
reset.addEventListener("click", function() {
	p1initialscore = 0;
	p2initialscore = 0;
	p1score.innerHTML = p1initialscore;
	p2score.innerHTML = p2initialscore;
});

// changing maxscore
var displaymaxscore = document.getElementById("displaymaxscore");
var maxscore = document.getElementById("maxscore");
maxscore.addEventListener("change", function() {
	displaymaxscore.innerHTML = maxscore.value;
});