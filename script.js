const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love You My Angel";
  gif.src =
    "loveyou.gif";
  const audioYes = document.querySelector(".audio-player");
  audioYes.play();
  audioNo.pause();
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  const audioNo = document.querySelector(".audio-player1");
  audioNo.play();
 
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const maxX = window.innerWidth - wrapperRect.width;
  const maxY = window.innerHeight - wrapperRect.height;
 
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
 
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
 });
