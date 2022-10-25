var elBody=document.querySelector('body')
var elbutton=document.querySelector('.button')
elbutton.addEventListener("click",function(){
    elBody.classList.toggle('dark');
})

