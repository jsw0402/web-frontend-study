let t=document.getElementById('target');
t.addEventListener("click",changeWord);
function changeWord(){
    let li=document.getElementsByTagName("h1");
    li[0].innerText="i will be a webMaster";
}