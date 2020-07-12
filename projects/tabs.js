let tabbtns=document.querySelectorAll('.tabdiv .divbtn button')

let showtabs=document.querySelectorAll('.tabdiv .showtab')
function showtabcontent(tabindex,colorcode){
tabbtns.forEach(function(node){
    node.style.backgroundColor="";
    node.style.color=""
})
tabbtns[tabindex].style.backgroundColor=colorcode;
tabbtns[tabindex].style.color='white';

showtabs.forEach((val)=>{
    val.style.display='none'

})
showtabs[tabindex].style.display="block";
showtabs[tabindex].style.backgroundColor=colorcode;
}
showtabcontent(0,'#808080')