fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))

let normalColor = window.getComputedStyle(document.documentElement).getPropertyValue("--txt-report");
let activeColor = window.getComputedStyle(document.documentElement).getPropertyValue("--txt-main");

let dayButton = document.getElementById("showDaily");
let weekButton = document.getElementById("showWeekly");
let monthButton = document.getElementById("showMonthly");

function dayHover() {
  dayButton.style.color = activeColor;
}

function weekHover() {
  weekButton.style.color = activeColor;
}

function monthHover() {
  monthButton.style.color = activeColor;
}

function appendData(object) {

  for (const iterator of object) {
    let cardContainer = document.getElementById("report__card");
    let div = document.createElement("div");

    // console.log(iterator);

    div.innerHTML = `
      <p>${iterator.title}</p>
      <p>${iterator.timeframes.weekly.current}hrs</p>
      <p>Yesterday - ${iterator.timeframes.weekly.previous}hrs</p>
    `;

    document.getElementById("showDaily").addEventListener("click", daily);
    function daily() {
      dayButton.style.color = activeColor;
      weekButton.style.color = normalColor;
      monthButton.style.color = normalColor;

      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.daily.current}hrs</p>
        <p>Yesterday - ${iterator.timeframes.daily.previous}hrs</p>
      `;
    }

    document.getElementById("showWeekly").addEventListener("click", weekly);
    function weekly() {
      dayButton.style.color = normalColor;
      weekButton.style.color = activeColor;
      monthButton.style.color = normalColor;

      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.weekly.current}hrs</p>
        <p>Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
      `;
    }

    document.getElementById("showMonthly").addEventListener("click", monthly);
    function monthly() {
      dayButton.style.color = normalColor;
      weekButton.style.color = normalColor;
      monthButton.style.color = activeColor;

      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.monthly.current}hrs</p>
        <p>Last Month - ${iterator.timeframes.monthly.previous}hrs</p>
      `;
    }

    cardContainer.appendChild(div);
  }
}