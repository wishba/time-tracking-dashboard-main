fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))

let normalColor = window.getComputedStyle(document.documentElement).getPropertyValue("--txt-report");
let activeColor = window.getComputedStyle(document.documentElement).getPropertyValue("--txt-main");

let dayButton = document.getElementById("showDaily");
let weekButton = document.getElementById("showWeekly");
let monthButton = document.getElementById("showMonthly");

let reportCard = document.getElementById("report__card");

function appendData(object) {
  for (const iterator of object) {
    let div = document.createElement("div");
    let reportCard = document.getElementById("report__card");
    div.className = `${iterator.title}`;

    reportCard.className = "data-weekly";
    div.innerHTML = `
      <button><img src="images/icon-ellipsis.svg" alt="more" /></button>
      <div>
        <p>${iterator.title}</p>
        <p class="hrs__current">${iterator.timeframes.weekly.current}hrs</p>
        <p class="hrs__previous">Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
      </div>
    `;

    document.getElementById("showDaily").addEventListener("click", daily);
    function daily() {
      reportCard.className = "data-daily";
      div.innerHTML = `
        <button><img src="images/icon-ellipsis.svg" alt="more" /></button>
        <div>
          <p>${iterator.title}</p>
          <p class="hrs__current">${iterator.timeframes.daily.current}hrs</p>
          <p class="hrs__previous">Yesterday - ${iterator.timeframes.daily.previous}hrs</p>
        </div>
      `;
    }

    document.getElementById("showWeekly").addEventListener("click", weekly);
    function weekly() {
      reportCard.className = "data-weekly";
      div.innerHTML = `
        <button><img src="images/icon-ellipsis.svg" alt="more" /></button>
        <div>
          <p>${iterator.title}</p>
          <p class="hrs__current">${iterator.timeframes.weekly.current}hrs</p>
          <p class="hrs__previous">Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
        </div>
      `;
    }

    document.getElementById("showMonthly").addEventListener("click", monthly);
    function monthly() {
      reportCard.className = "data-monthly";
      div.innerHTML = `
        <button><img src="images/icon-ellipsis.svg" alt="more" /></button>
        <div>
          <p>${iterator.title}</p>
          <p class="hrs__current">${iterator.timeframes.monthly.current}hrs</p>
          <p class="hrs__previous">Last Month - ${iterator.timeframes.monthly.previous}hrs</p>
        </div>
      `;
    }

    document.getElementById("report__card").appendChild(div);
  }
}


function clickDay() {
  dayButton.style.color = "white";
  weekButton.style.color = normalColor;
  monthButton.style.color = normalColor;
}
function onDay() {
  dayButton.style.color = "white";
}
function outDay() {
  if (reportCard.className == "data-daily") {
    dayButton.style.color = "white";
  }
  if (reportCard.className == "data-weekly") {
    dayButton.style.color = normalColor;
  }
  if (reportCard.className == "data-monthly") {
    dayButton.style.color = normalColor;
  }
}

function clickWeek() {
  dayButton.style.color = normalColor;
  weekButton.style.color = "white";
  monthButton.style.color = normalColor;
}
function onWeek() {
  weekButton.style.color = "white";
}
function outWeek() {
  if (reportCard.className == "data-daily") {
    weekButton.style.color = normalColor;
  }
  if (reportCard.className == "data-weekly") {
    weekButton.style.color = "white";
  }
  if (reportCard.className == "data-monthly") {
    weekButton.style.color = normalColor;
  }
}

function clickMonth() {
  dayButton.style.color = normalColor;
  weekButton.style.color = normalColor;
  monthButton.style.color = "white";
}
function onMonth() {
  monthButton.style.color = "white";
}
function outMonth() {
  if (reportCard.className == "data-daily") {
    monthButton.style.color = normalColor;
  }
  if (reportCard.className == "data-weekly") {
    monthButton.style.color = normalColor;
  }
  if (reportCard.className == "data-monthly") {
    monthButton.style.color = "white";
  }
}