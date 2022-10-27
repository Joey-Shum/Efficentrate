
document.querySelector('.to-do').addEventListener('click', async function(){
    const popout = await fetch("popout.html");
    const popoutHTML = await popout.text();
    document.querySelector('.to-do-content').style.display='block';
    const target = document.getElementById('to-do-content');
    target.innerHTML = popoutHTML;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "popout.js"; 
    document.body.appendChild(script);
    document.querySelector('.music-content').style.display='none';
    document.querySelector('.timer-content').style.display='none';
});

document.querySelector('.music').addEventListener('click', async function(){
    const popout = await fetch("music.html");
    const popoutHTML = await popout.text();
    document.querySelector('.music-content').style.display='block';
    const target = document.getElementById('music-content');
    target.innerHTML = popoutHTML;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "music.js";
    document.body.appendChild(script);
    document.querySelector('.to-do-content').style.display='none';
    document.querySelector('.timer-content').style.display='none';
});

document.querySelector('.timer').addEventListener('click', async function(){
    const popout = await fetch("timer.html");
    const popoutHTML = await popout.text();
    document.querySelector('.timer-content').style.display='block';
    const target = document.getElementById('timer-content');
    target.innerHTML = popoutHTML;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "timer.js";
    document.body.appendChild(script);
    document.querySelector('.to-do-content').style.display='none';
    document.querySelector('.music-content').style.display='none';
});