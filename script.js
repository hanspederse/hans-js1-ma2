// question 1
var bg = document.getElementById("bg");
bg.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'green';
});

// question 2
var toggler = document.getElementsByClassName("toggler");
toggler[0].addEventListener('click', function(e){
    var togglee = document.getElementsByClassName("togglee");
   togglee[0].classList.toggle("extra");
});

// question 3
var sel = document.getElementsByTagName('select');
sel[0].addEventListener('change', function(e){
    var val = sel[0].value;
	var par = document.getElementsByClassName("paragraphs-container");
	par[0].innerHTML = "";
	var i;
	for(i = 0; i < val; i++){
		par[0].innerHTML += "<p>This is a paragraph...</p>";
	}
});

// question 4
var input = document.getElementsByClassName("input");
input[0].addEventListener('change', function(e){
  var str = input[0].value;
  var n = str.length;
  document.getElementsByClassName("char-count")[0].getElementsByTagName('b')[0].innerHTML = n;
});

// question 5
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.body.className = "highlight";
  } else {
    document.body.className = "";
  }
}