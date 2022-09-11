fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))

// let normalColor = window.getComputedStyle(document.documentElement).getPropertyValue("--txt-report");
// let activeColor = window.getComputedStyle(document.documentElement).getPropertyValue("--txt-main");

// let dayButton = document.getElementById("showDaily");
// let weekButton = document.getElementById("showWeekly");
// let monthButton = document.getElementById("showMonthly");

function appendData(object) {
  for (const iterator of object) {
    let cardContainer = document.getElementById("report__card");
    let div = document.createElement("div");

    div.innerHTML = `
      <div id="reportWeek">
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.weekly.current}hrs</p>
        <p>Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
      </div>
    `;

    document.getElementById("showDaily").addEventListener("click", daily);
    function daily() {
      div.innerHTML = `
        <div id="reportDay">
          <p>${iterator.title}</p>
          <p>${iterator.timeframes.daily.current}hrs</p>
          <p>Yesterday - ${iterator.timeframes.daily.previous}hrs</p>
        </div>
      `;
    }

    document.getElementById("showWeekly").addEventListener("click", weekly);
    function weekly() {
      div.innerHTML = `
        <div id="reportWeek">
          <p>${iterator.title}</p>
          <p>${iterator.timeframes.weekly.current}hrs</p>
          <p>Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
        </div>
      `;
    }

    document.getElementById("showMonthly").addEventListener("click", monthly);
    function monthly() {
      div.innerHTML = `
        <div id="reportMonth">
          <p>${iterator.title}</p>
          <p>${iterator.timeframes.monthly.current}hrs</p>
          <p>Last Month - ${iterator.timeframes.monthly.previous}hrs</p>
        </div>
      `;
    }

    cardContainer.appendChild(div);
  }
}