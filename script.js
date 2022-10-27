

function formatNum(n){
  return n > 9 ? n: "0" + n;
}

function getTime(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = formatNum(today.getHours()) + ":" + formatNum(today.getMinutes()) + ":" + formatNum(today.getSeconds());
  document.querySelector('h1').innerHTML = time;
  document.querySelector('p').innerHTML = date;
}

setInterval(getTime, 1000);