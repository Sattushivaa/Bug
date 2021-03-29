console.log('Hello World!');
var xhr = new XMLHttpRequest();
var input = document.getElementById('file');

function getData(){
xhr.open('GET','Satyam.txt',true);




xhr.onload = function(){
  document.body.textContent = xhr.response;
}
xhr.send();
xhr.onerror = function(error){
  console.log(error);
}
}

input.onchange = function(e){
  console.log(e.target.value);
}
