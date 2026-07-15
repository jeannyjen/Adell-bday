const loading = document.getElementById("loading");

const cover = document.getElementById("cover");

setTimeout(()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

cover.style.opacity="1";

},1000);

},2500);

document.getElementById("openBtn").onclick=function(){

alert("Next Part → Gift Box Animation 🌻");

}
