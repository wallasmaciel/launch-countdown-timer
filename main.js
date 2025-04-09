const handlePassageTime = () => {
  const now = new Date()
  const dateEnd = new Date(now.getFullYear(), now.getMonth(), 19, 19, 0, 0)
  //
  let dateDiff = dateEnd - now
  if (dateDiff <= 0) {
    dateEnd.setMonth(dateEnd.getMonth() + 1)
    dateDiff = dateEnd - now
  }
  //
	const seconds = Math.floor((dateDiff / 1000) % 60)
  const minutes = Math.floor((dateDiff / 1000 / 60) % 60)
  const hours = Math.floor((dateDiff / (1000 * 60 * 60)) % 24)
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
  // 
  const spans = document.querySelectorAll(".card > span")
  changeCountdown(spans[0], `${days}`.padStart(2, "0"))
  changeCountdown(spans[1], `${hours}`.padStart(2, "0"))
  changeCountdown(spans[2], `${minutes}`.padStart(2, "0"))
  changeCountdown(spans[3], `${seconds}`.padStart(2, "0"))
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

  divTop.addEventListener("animationend", () => divTop.remove());

  divBottom.addEventListener("animationstart", () => {
    divBottom.innerHTML = `<span>${text}</span>`;
  });
  
  divBottom.addEventListener("animationend", () => divBottom.remove());
  // 
  el.parentNode.appendChild(divTop)
  el.parentNode.appendChild(divBottom)
}