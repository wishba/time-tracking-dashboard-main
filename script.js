fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))

function appendData(object) {

  for (const iterator of object) {
    let cardContainer = document.getElementById("card__container");
    let div = document.createElement("div");

    console.log(iterator.timeframes);

    div.innerHTML = `
      <p>${iterator.timeframes.daily.current}</p>
    `;

    document.getElementById("showDaily").addEventListener("click", daily);
    function daily() {
      div.innerHTML = `
        <p>${iterator.timeframes.daily.current}</p>
      `;
    }

    document.getElementById("showWeekly").addEventListener("click", weekly);
    function weekly() {
      div.innerHTML = `
        <p>${iterator.timeframes.weekly.current}</p>
      `;
    }

    document.getElementById("showMonthly").addEventListener("click", monthly);
    function monthly() {
      div.innerHTML = `
        <p>${iterator.timeframes.monthly.current}</p>
      `;
    }


    cardContainer.appendChild(div);
  }
}