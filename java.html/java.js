alert('test')

var button = document.queryselector('button';
var box = document.getElementById('changeme');

button.onclick = function changeColor(){
	box.style.background ='blue';
}


<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
