fetch("data.json")
  .then(res => res.json())
  .then(data => appendData(data))

function appendData(data) {
  let cardContainer = document.getElementById("card__container");
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    // console.log(element.timeframes.daily);
    // console.log(element.timeframes.daily.current);
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${element.title}</p>
      <p>${element.timeframes.daily.current}hrs</p>
      <p>Yesterday - ${element.timeframes.daily.previous}hrs</p>
    `;
    cardContainer.appendChild(div);
  }
}