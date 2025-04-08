const handlePassageTime = () => {
  const time = new Date()
  // 
  const spans = document.querySelectorAll(".card > span")
  changeCountdown(spans[0], `${time.getDate()}`.padStart(2, "0"))
  changeCountdown(spans[1], `${time.getHours()}`.padStart(2, "0"))
  changeCountdown(spans[2], `${time.getMinutes()}`.padStart(2, "0"))
  changeCountdown(spans[3], `${time.getSeconds()}`.padStart(2, "0"))
}
const intervalPassageTime = setInterval(handlePassageTime, 1000)

const changeCountdown = (el, text) => {
  if (el.innerText == text) return
  // 
  el.innerText = text
  // 
  const divTop = document.createElement("div")
  divTop.classList.add("top")
  const divBottom = document.createElement("div")
  divBottom.classList.add("bottom")
  
  divTop.addEventListener("animationstart", () => {
    divTop.innerHTML = `<span>${text}</span>`;
  });

  divTop.addEventListener("animationend", divTop.remove());

  divBottom.addEventListener("animationstart", () => {
    divBottom.innerHTML = `<span>${text}</span>`;
  });
  
  divBottom.addEventListener("animationend", divBottom.remove());
  // 
  el.parentNode.appendChild(divTop)
  el.parentNode.appendChild(divBottom)
}