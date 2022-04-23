let moon=document.querySelector('.moon');
let mountain=document.querySelector('.mountain');
let road=document.querySelector('.road');
let text=document.getElementsByTagName('h1')[0];
let cont=document.querySelector('.cont');
let p=document.querySelector('.warn');
function change(){
if (screen.width < screen.height) {
    cont.classList.add('warn');
    p.classList.add('p');
    document.body.style.overflow='hidden';
} 
else{
    p.classList.remove('p');
    cont.classList.remove('warn');
    document.body.style.overflow='';

}
}

change();
window.addEventListener('resize',change);

window.addEventListener('scroll',function(){
    let x= window.scrollY;
  

    moon.style.left= -x*0.5+'px';
    moon.style.top=-x*0.3 +'px'
    mountain.style.top= -x*0.15+'px';
    road.style.top=x*0.23+'px';
    text.style.top=x+'px';
})


