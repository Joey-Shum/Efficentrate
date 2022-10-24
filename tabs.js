// var tabs = document.querySelectorAll('.tab button')
// // numTabs = tabs.length;
// for (let i = 0; i < tabs.length; i++) {
//     tabClass = tabs[i].className;
//     alert(tabClass);
//     document.querySelector('.'+tabClass).addEventListener('click', function(){
//         document.querySelector('.'+tabClass +'-content').style.display='block';
//     });
// }

// for (let i = 0; i < tabs.length; i++) {
//     document.querySelector('.to-do').addEventListener('click', function(){
//         document.querySelector('.to-do-content').style.display='block';
//         // var tabclass = document.getElementById('london'+'Content').className;
//         // alert(document.getElementsByClassName('.'+tabclass).style);
//         // document.querySelector(tabclass).style.display='active';
//     });
// }

///////
document.querySelector('.to-do').addEventListener('click', async function(){
    const popout = await fetch("popout.html");
    const popoutHTML = await popout.text();
    document.querySelector('.to-do-content').style.display='block';
    const target = document.getElementById('to-do-content');
    target.innerHTML = popoutHTML
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "popout.js"; 
    document.body.appendChild(script);
    document.querySelector('.music-content').style.display='none';
    document.querySelector('.block-content').style.display='none';
});

document.querySelector('.music').addEventListener('click', function(){
    document.querySelector('.to-do-content').style.display='none';
    document.querySelector('.music-content').style.display='block';
    document.querySelector('.block-content').style.display='none';
});

document.querySelector('.block').addEventListener('click', function(){
    document.querySelector('.to-do-content').style.display='none';
    document.querySelector('.music-content').style.display='none';
    document.querySelector('.block-content').style.display='block';
});
//



