console.log('Hello World!');
var xhr = new XMLHttpRequest();
var input = document.getElementById('file');

function getData(){
xhr.open('POST','Satyam.txt',true);
xhr.getResponseHeader('Content-Type','text');
var formData = new FormData();
var text = 'satyam';
formData.append('theText',text);
xhr.onload = function(){
  document.body.textContent = xhr.response;
}
xhr.send(text);
xhr.onerror = function(error){
  console.log(error);
}
}

input.onchange = function(e){
  console.log(e.target.value);
}