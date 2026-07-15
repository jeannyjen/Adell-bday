// =========================
// LOADING SCREEN
// =========================

const loading = document.getElementById("loading");
const cover = document.getElementById("cover");


window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.style.opacity = "0";


        setTimeout(()=>{

            loading.style.display="none";

        },1000);


    },2500);


});




// =========================
// OPEN GIFT BUTTON
// =========================


const openGift = document.getElementById("openGift");

const giftScene = document.getElementById("giftScene");


openGift.addEventListener("click",()=>{


    cover.style.display="none";


    giftScene.style.display="flex";


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




// =========================
// CLICK GIFT BOX
// =========================


const giftBox = document.getElementById("giftBox");

const memoryTable = document.getElementById("memoryTable");


giftBox.addEventListener("click",()=>{


    giftBox.style.transform="scale(1.2)";


    setTimeout(()=>{


        giftScene.style.display="none";


        memoryTable.style.display="block";


        window.scrollTo({

            top:memoryTable.offsetTop,

            behavior:"smooth"

        });


    },700);



});
