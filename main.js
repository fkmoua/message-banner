var myH1 = document.getElementsByTagName("h1")[0]
myH1.addEventListener("keyup", function(){
	console.log(myInput.value);
})

var myInput = document.getElementsByTagName("input")[0]

myInput.addEventListener("keyup", function(){
	console.log(myInput.value);
	myH1.innerText = myInput.value
})