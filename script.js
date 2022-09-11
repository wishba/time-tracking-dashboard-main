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
    // let cardContainer = document.getElementById("report__card");
    let div = document.createElement("div");

    document.getElementById("report__card").className = "data-weekly";


    div.innerHTML = `
      <p>${iterator.title}</p>
      <p>${iterator.timeframes.weekly.current}hrs</p>
      <p>Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
    `;

    document.getElementById("showDaily").addEventListener("click", daily);
    function daily() {
      document.getElementById("report__card").className = "data-daily";

      div.innerHTML = `
      <p>${iterator.title}</p>
      <p>${iterator.timeframes.daily.current}hrs</p>
      <p>Yesterday - ${iterator.timeframes.daily.previous}hrs</p>
      `;

      // console.log(document.getElementsByClassName("data-daily"));
      // console.log(document.getElementById("report__card").className == "data-daily");
      // if (document.getElementById("report__card").className == "data-daily") {
      //   console.log("benar");
      // }
    }

    document.getElementById("showWeekly").addEventListener("click", weekly);
    function weekly() {
      document.getElementById("report__card").className = "data-weekly";

      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.weekly.current}hrs</p>
        <p>Last Week - ${iterator.timeframes.weekly.previous}hrs</p>
      `;
    }

    document.getElementById("showMonthly").addEventListener("click", monthly);
    function monthly() {
      document.getElementById("report__card").className = "data-monthly";

      div.innerHTML = `
        <p>${iterator.title}</p>
        <p>${iterator.timeframes.monthly.current}hrs</p>
        <p>Last Month - ${iterator.timeframes.monthly.previous}hrs</p>
      `;
    }

    document.getElementById("report__card").appendChild(div);
  }
}


function clickDay() {
  dayButton.style.color = activeColor;
  weekButton.style.color = normalColor;
  monthButton.style.color = normalColor;
}
function onDay() {
  dayButton.style.color = activeColor;
}
function outDay() {
  if (reportCard.className == "data-daily") {
    dayButton.style.color = activeColor;
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
  weekButton.style.color = activeColor;
  monthButton.style.color = normalColor;
}
function onWeek() {
  weekButton.style.color = activeColor;
}
function outWeek() {
  if (reportCard.className == "data-daily") {
    weekButton.style.color = normalColor;
  }
  if (reportCard.className == "data-weekly") {
    weekButton.style.color = activeColor;
  }
  if (reportCard.className == "data-monthly") {
    weekButton.style.color = normalColor;
  }
}

function clickMonth() {
  dayButton.style.color = normalColor;
  weekButton.style.color = normalColor;
  monthButton.style.color = activeColor;
}
function onMonth() {
  monthButton.style.color = activeColor;
}
function outMonth() {
  if (reportCard.className == "data-daily") {
    monthButton.style.color = normalColor;
  }
  if (reportCard.className == "data-weekly") {
    monthButton.style.color = normalColor;
  }
  if (reportCard.className == "data-monthly") {
    monthButton.style.color = activeColor;
  }
}