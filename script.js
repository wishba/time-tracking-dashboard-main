fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))

function appendData(object) {
  for (const iterator of object) {
    let cardContainer = document.getElementById("card__container");
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${iterator.title}</p>
      <p>${iterator.timeframes.daily.current}hrs</p>
      <p>Yesterday - ${iterator.timeframes.daily.previous}hrs</p>
      `;
    cardContainer.appendChild(div);
  }
}