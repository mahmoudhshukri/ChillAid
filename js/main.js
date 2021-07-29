// start header
let bar = document.getElementById('bar');
bar.onclick = function(){
    document.getElementById('second-menu').classList.toggle('toggle');
}
// end header
let topbtn = document.getElementById('top');
topbtn.onclick = function(){
    window.scrollTo(0,0);
}