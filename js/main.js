var elBody=document.querySelector('body')
var elbutton=document.querySelector('.button')
// var elbutton=document.querySelector('.body-button')

elbutton.addEventListener("click",function(){
    elBody.classList.toggle('dark');
})

