const WHITE_KEYBOARD3 = ["1", "2", "3", "4", "5", "6", "7"];
const BLACK_KEYBOARD3 = ["F2", "F3", "F5", "F6", "F7"];
const WHITE_KEYBOARD = ["u", "i", "o", "p", "[", "]", "\\"];
const BLACK_KEYBOARD = ["8", "9", "-", "=", "Backspace"];
const WHITE_KEYBOARD5 = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYBOARD5 = ["s", "d", "g", "h", "j"];

const showKeyBtn = document.querySelector(".show_btn");

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys3 = document.querySelectorAll(".key.white3");
const blackKeys3 = document.querySelectorAll(".key.black3");
const whiteKeys5 = document.querySelectorAll(".key.white5");
const blackKeys5 = document.querySelectorAll(".key.black5");

keys.forEach((key) => {
  key.addEventListener("click", () => play(key));
});

const showKeys = () => {
  whiteKeys3.forEach(
    (key, index) => (key.textContent = WHITE_KEYBOARD3[index])
  );
  blackKeys3.forEach(
    (key, index) => (key.textContent = BLACK_KEYBOARD3[index])
  );
  whiteKeys.forEach((key, index) => (key.textContent = WHITE_KEYBOARD[index]));
  blackKeys.forEach((key, index) => (key.textContent = BLACK_KEYBOARD[index]));
  whiteKeys5.forEach(
    (key, index) => (key.textContent = WHITE_KEYBOARD5[index])
  );
  blackKeys5.forEach(
    (key, index) => (key.textContent = BLACK_KEYBOARD5[index])
  );
};

const hideKeys = () => {
  keys.forEach((key) => (key.textContent = ""));
};

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYBOARD.indexOf(key);
  const blackKeyIndex = BLACK_KEYBOARD.indexOf(key);
  const whiteKey3Index = WHITE_KEYBOARD3.indexOf(key);
  const blackKey3Index = BLACK_KEYBOARD3.indexOf(key);
  const whiteKey5Index = WHITE_KEYBOARD5.indexOf(key);
  const blackKey5Index = BLACK_KEYBOARD5.indexOf(key);

  if (whiteKeyIndex > -1) play(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) play(blackKeys[blackKeyIndex]);
  if (whiteKey3Index > -1) play(whiteKeys3[whiteKey3Index]);
  if (blackKey3Index > -1) play(blackKeys3[blackKey3Index]);
  if (whiteKey5Index > -1) play(whiteKeys5[whiteKey5Index]);
  if (blackKey5Index > -1) play(blackKeys5[blackKey5Index]);
});

function play(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

showKeyBtn.addEventListener("click", () => {
  if (showKeyBtn.classList.contains("off")) {
    showKeyBtn.classList.remove("off");
    showKeyBtn.classList.add("on");
    showKeys();
    showKeyBtn.textContent = "Hide Key";
  } else {
    showKeyBtn.classList.remove("on");
    showKeyBtn.classList.add("off");
    hideKeys();
    showKeyBtn.textContent = "Show Key";
  }
});
