let playSounds,
    audio = [], audio1 = [], audio2 = [], audio3 = [],
    startTime,currentTime,
    fullTime, fullTime1, fullTime2, fullTime3,
    recordButton = document.querySelector("#record"),
    recordButton1 = document.querySelector('#record1'),
    recordButton2 = document.querySelector('#record2'),
    recordButton3 = document.querySelector('#record3'),
    playButton = document.querySelector('#play'),
    playButton1 = document.querySelector('#play1'),
    playButton2 = document.querySelector('#play2'),
    playButton3 = document.querySelector('#play3'),
    clearButton = document.querySelector('#clear'),
    clearButton1 = document.querySelector('#clear1'),
    clearButton2 = document.querySelector('#clear2'),
    clearButton3 = document.querySelector('#clear3'),
    playAll = document.querySelector('#playall'),
    clearAll = document.querySelector('#clearall');

document.body.addEventListener('keypress', (e) => {
    let boom = document.querySelector('#boom'),
        clap = document.querySelector('#clap'),
        tink = document.querySelector('#tink'),
        kick = document.querySelector('#kick'),
        hihat = document.querySelector('#hihat'),
        ride = document.querySelector('#ride');

    switch (e.key) {
        case 'q':
            boom.currentTime = 0
            boom.play()
            break;
        case 'w':
            clap.currentTime = 0
            clap.play()
            break;
        case 'e':
            tink.currentTime = 0
            tink.play();
            break;
        case 'r':
            kick.currentTime = 0
            kick.play();
            break;
        case 't':
            hihat.currentTime = 0
            hihat.play();
            break;
        case 'y':
            ride.currentTime = 0
            ride.play();
            break;
    }
});

let isRecording = false;

function startRecording(track, trackTime) {
    isRecording = true;
    console.log("recording")
    console.log(track.length)
    if (isRecording) {
        startTime = Date.now();
        document.body.addEventListener('keypress', (e) => {
            switch (e.key) {
                case 'q':
                    track.push(boom);
                    trackTime = Date.now() - startTime;
                    break;
                case 'w':
                    track.push(clap);
                    trackTime = Date.now() - startTime;
                    break;
                case 'e':
                    track.push(tink);
                    trackTime = Date.now() - startTime;
                    break;
                case 'r':
                    track.push(kick);
                    trackTime = Date.now() - startTime;
                    break;
                case 't':
                    track.push(hihat);
                    trackTime = Date.now() - startTime;
                    break;
                case 'y':
                    track.push(ride);
                    trackTime = Date.now() - startTime;
                    break;
            }
        });
    }
};

function stopRecording() {
    isRecording = false;
    console.log("stop recording")
};

function playTrack(track) {
    let startTime = 0;
    for (let i = 0; i < track.length; i++) {
      setTimeout(() => {
        console.log(track[i]);
        track[i].currentTime = 0;
        track[i].play();
      }, startTime);
      startTime += track[i].duration * 1000;
    }
}

function clearTrack(track) {
    track.length = 0;
    console.log(track.length)
}

playAll.addEventListener('click', function (e) {
    playTrack(audio);
    playTrack(audio1);
    playTrack(audio2);
    playTrack(audio3);
    console.log(audio.length)
});

clearAll.addEventListener('click', function (e) {
    audio.length = 0;
    audio1.length = 0;
    audio2.length = 0;
    audio3.length = 0;
    console.log(audio.length)
});

playButton.addEventListener('click', playTrack.bind(null, audio, fullTime));
playButton1.addEventListener('click', playTrack.bind(null, audio1, fullTime1));
playButton2.addEventListener('click', playTrack.bind(null, audio2, fullTime2));
playButton3.addEventListener('click', playTrack.bind(null, audio3, fullTime3));

recordButton.addEventListener('click', startRecording.bind(null, audio, fullTime));
recordButton1.addEventListener('click', startRecording.bind(null, audio1, fullTime1))
recordButton2.addEventListener('click', startRecording.bind(null, audio2, fullTime2))
recordButton3.addEventListener('click', startRecording.bind(null, audio3, fullTime3))

clearButton.addEventListener('click', clearTrack.bind(null, audio))
clearButton1.addEventListener('click', clearTrack.bind(null, audio1))
clearButton2.addEventListener('click', clearTrack.bind(null, audio2))
clearButton3.addEventListener('click', clearTrack.bind(null, audio3))


let stopRecord = document.querySelector('.stop');
stopRecord.addEventListener('click', stopRecording);