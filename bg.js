

//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name == "playTrack"){
        var trackName = msg.track;
        var audioElement = document.querySelector('.audio-element');
        audioElement.src = 'assets/' + trackName + '.mp3';
        audioElement.play();
    }

    if(msg.name == "pauseTrack"){
        var audioElement = document.querySelector('.audio-element');
        audioElement.pause();
    }
});