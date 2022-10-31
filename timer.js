var timeSecond = 1500;
var timeH = document.querySelector("h2");

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
}

document.querySelector('.study-start').addEventListener('click', function(){
  document.querySelector('.study-start').style.display='none';
  document.querySelector('.study-pause').style.display='block';
  if (timeSecond <= 0) {
    timeSecond = 30;
  }
  displayTime(timeSecond);
  var countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      endCount();
      clearInterval(countDown);
    }
    document.querySelector('.study-pause').addEventListener('click', function(){
      clearInterval(countDown);
      document.querySelector('.study-start').style.display='block';
      document.querySelector('.study-pause').style.display='none';
    });
  }, 1000);
});

