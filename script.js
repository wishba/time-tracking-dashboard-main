fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))

function appendData(object) {

  for (const iterator of object) {
    let cardContainer = document.getElementById("report__card");
    let div = document.createElement("div");

    console.log(iterator);

    div.innerHTML = `
      <p>${iterator.title}</p>
      <p>${iterator.timeframes.weekly.current}hrs</p>
      <p>Yesterday - ${iterator.timeframes.weekly.previous}hrs</p>
    `;

    document.getElementById("showDaily").addEventListener("click", daily);
    function daily() {
      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.daily.current}hrs</p>
        <p>Yesterday - ${iterator.timeframes.daily.previous}hrs</p>
      `;
    }

    document.getElementById("showWeekly").addEventListener("click", weekly);
    function weekly() {
      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.weekly.current}hrs</p>
        <p>Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
      `;
    }

    document.getElementById("showMonthly").addEventListener("click", monthly);
    function monthly() {
      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.monthly.current}hrs</p>
        <p>Last Month - ${iterator.timeframes.monthly.previous}hrs</p>
      `;
    }

    cardContainer.appendChild(div);
  }
}