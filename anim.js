// Synchronize the lyrics with the song
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var titulo = document.querySelector(".titulo"); // Select the 'titulo' element

// Hide 'titulo' when the song starts playing
audio.addEventListener("play", function () {
  setTimeout(function () {
    titulo.style.display = "none";
  }, 10000); // 10,000 milliseconds = 10 seconds
});
// Array of objects containing each line and its timestamp in seconds
var lyricsData = [
  { text: "Oh, I wake up with a headache", start: 13, end: 16 },
  { text: "I think I might have slept late last night", start: 16, end: 20 },
  { text: "Put my face into my pillow", start: 22, end: 26 },
  { text: "Saying sorry I will make notes.", start: 26, end: 29 },
  { text: "I will fix my sleep schedule tonight", start: 29, end: 32 },
  { text: "Ooh a ho, I might, Oo hoo I'll try ", start: 32, end: 36 },
  { text: "But now i just need to wipe the sleep out of my eye", start: 36, end: 40 },
  { text: "Ooh a ho, i know", start: 40, end: 43 },
  { text: "Ooh a ho, I won't make it out of my bed if I keep biding my time", start: 43, end: 50 },
  { text: "I just need some coffee in the morning no sugar or tea", start: 53, end: 58 },
  { text: "Cause I can feel my eyelids falling, they trying asleep", start: 58, end: 62 },
  { text: "But if i take a sip of caffeine", start: 62, end: 65 },
  { text: "Then surely i'll be", start: 65, end: 67 },
  { text: "Awake until the evening till i got back to sleep", start: 67, end: 72 },
  { text: "Now I'm waiting... waters boiling", start: 80, end: 84 },
  { text: "Half a sleep im swaying left and right", start: 84, end: 88 },
  { text: "But suddenly the... rich aromas", start: 89, end: 93 },
  { text: "Drift up to my face, and now I'm thinking am i gonna stay awake", start: 94, end: 99 },
  { text: "Today", start: 100, end: 102 },
  { text: "I just need some coffee in the morning, No sugar or tea", start: 103, end: 107 },
  { text: "Cuz i can feel my eyelids falling they trying a sleep", start: 107, end: 112 },
  { text: "But if i take a sip of caffeine, then surely i'll be", start: 112, end: 116 },
  { text: "Awake until the evening till we go back to sleep", start: 116, end: 122 }
];

// Update lyrics based on the current time
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time < line.end
  );

  if (currentLine) {
    // Display the current line without delay or fading effect
    lyrics.innerHTML = currentLine.text;
  } else {
    // Clear lyrics when no matching line
    lyrics.innerHTML = "";
  }
}

// Update lyrics every 100 milliseconds
setInterval(updateLyrics, 100);
