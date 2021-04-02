console.log('Hello World!');
var xhr = new XMLHttpRequest();
var input = document.getElementById('file');
var errorField = document.getElementById('error');

function getData(){
xhr.open('GET',input.value,true);
xhr.onload = function(){
  document.body.textContent = xhr.response;
}
xhr.send();
xhr.onerror = function(error){
  console.log(error);
  errorField.innerText = error;
}
}

input.onchange = function(e){
  console.log(e.target.value);
  errorField.innerText += ' : ' + e.target.value ;
}