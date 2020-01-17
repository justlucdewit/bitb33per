// create web audio api context
var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

async function playNote(frequency, duration) {
  return new Promise((resolve) => {
    // create Oscillator node
    var oscillator = audioCtx.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      resolve();
    }, duration);
  });
}

const BPM = 120;
const playspeed = 60/BPM;
const output = document.getElementById("output");

async function playSong(){
    output.innerHTML = "";
    const code = document.getElementById("editor").innerText.split("\n");
    //console.log(code);
    for (const i in code){
        let line = code[i].trim();
        if (line[0] != "#" && line[0] != "\n" && line != ""){
            let freq = parseInt(line.split(";")[0]);
            let duration = parseInt(line.split(";")[1]);
            print(`freq = ${freq} dur = ${duration}<br>`);
            await playNote(freq, duration*playspeed);
        }
    }
}

function print(str){
    output.innerHTML += str;
}