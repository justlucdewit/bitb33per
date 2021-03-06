/*
note notation:
	> output string			print statements
	# comment				comments
	freq;duration			notes
	freq1-freq2;duration	smooth glissando
	freq1~freq2;duration	hammerd glissando
*/
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let BPM = 120;
let playspeed = 60 / BPM;
const output = document.getElementById("output");
const editor = document.getElementById("editor");

let songcount = 0;

function loadfromurl() {
  editor.innerHTML = atob(findGetParameter("c"))
    .split("\n")
    .join("<br>");
  const speed = findGetParameter("s");
  if (speed != 0) {
    setBPMToValue(parseInt(speed));
  }
}

async function playNote(frequency, duration) {
  return new Promise(resolve => {
    const oscillator = audioCtx.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      resolve();
    }, duration);
  });
}

async function playGlissando(f1, f2, duration) {
  const smoothness = 40;
  const numOfLoops = Math.floor(duration / smoothness);
  const freqDiffStep = (f1 - f2) / numOfLoops;
  for (let itter = 0; itter < numOfLoops; itter++) {
    f1 -= freqDiffStep;
    await playNote(f1, smoothness);
  }
}

async function playSong() {
  stopSong();
  output.innerHTML = "";
  const code = editor.innerText.split("\n");
  let songcountbegin = songcount;
  for (const i in code) {
    if (songcount != songcountbegin) {
      break;
    }
    let line = code[i].trim();

    if (line[0] == "#" || line[0] == "\n" || line == "") {
      continue;
    } else if (line[0] == ">") {
      line = line.substr(1);
      print(line + "<br>");
      continue;
    } else {
      const freq = line.split(";")[0];
      const duration = line.split(";")[1];
      //if note is glissando
      if (freq.includes("~")) {
        const f1 = parseInt(freq.split("~")[0]);
        const f2 = parseInt(freq.split("~")[1]);
        await playGlissando(f1, f2, duration * playspeed);
      } else {
        //note is note
        await playNote(parseInt(freq), parseInt(duration) * playspeed);
      }
    }
  }
  songcount += 1;
}

function stopSong() {
  songcount += 1;
}

function print(str) {
  output.innerHTML += str;
}

function getCompressedSong() {
  const rawcode = editor.innerText;
  let compressed = btoa(rawcode);
  copyStringToClipboard(
    `https://justlucdewit.github.io/bitb33per?c=${compressed}&s=${BPM}`
  );
  alert("URL has been copied to clipboard");
}

function copyStringToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  if (result == null) {
    result = "";
  }
  return result;
}

function setBPMToValue(v) {
  document.getElementById("BPMslider").value = v;
  document.getElementById("bpmlabel").innerText = `${v} BPM`;
  BPM = v;
  playspeed = 60 / BPM;
}

function setBPM() {
  document.getElementById("bpmlabel").innerText = `${
    document.getElementById("BPMslider").value
  } BPM`;
  BPM = document.getElementById("BPMslider").value;
  playspeed = 60 / BPM;
}

loadfromurl();
