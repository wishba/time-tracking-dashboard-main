fetch("data.json")
  .then(res => res.json())
  .then(data => appendData(data))

function appendData(data) {
  let cardContainer = document.getElementById("card__container");
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${element.title}</p>
    `;
    cardContainer.appendChild(div);
  }
}