const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const title = document.querySelectorAll(".title");
const hours = document.querySelectorAll(".hour");
const lastHour = document.querySelectorAll(".last-hour");

const url = "/data.json";
let finalData;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    finalData = data;
    // Veri yüklendikten sonra sayfa içeriği güncellenir
    daily.classList.add("active");
    monthly.classList.remove("active");
    weekly.classList.remove("active");
    for (let i = 0; i <= 5; i++) {
      title[i].innerHTML = finalData[i].title;
      hours[i].innerHTML = `${finalData[i].timeframes.daily.current}hrs`;
      lastHour[
        i
      ].innerHTML = `Last Day - ${finalData[i].timeframes.daily.previous}hrs`;
    }
  });

  daily.addEventListener("click", () => {
    daily.classList.toggle("active", true);
    weekly.classList.toggle("active", false);
    monthly.classList.toggle("active", false);
    for (let i = 0; i <= 5; i++) {
      title[i].innerHTML = finalData[i].title;
      hours[i].innerHTML = `${finalData[i].timeframes.daily.current}hrs`;
      lastHour[
        i
      ].innerHTML = `Last Week - ${finalData[i].timeframes.daily.previous}hrs`;
    }
  });

weekly.addEventListener("click", () => {
  weekly.classList.toggle("active", true);
  daily.classList.toggle("active", false);
  monthly.classList.toggle("active", false);
  for (let i = 0; i <= 5; i++) {
    title[i].innerHTML = finalData[i].title;
    hours[i].innerHTML = `${finalData[i].timeframes.weekly.current}hrs`;
    lastHour[
      i
    ].innerHTML = `Last Week - ${finalData[i].timeframes.weekly.previous}hrs`;
  }
});

monthly.addEventListener("click", () => {
  monthly.classList.toggle("active", true);
  daily.classList.toggle("active", false);
  weekly.classList.toggle("active", false);
  for (let i = 0; i <= 5; i++) {
    title[i].innerHTML = finalData[i].title;
    hours[i].innerHTML = `${finalData[i].timeframes.monthly.current}hrs`;
    lastHour[
      i
    ].innerHTML = `Last Month - ${finalData[i].timeframes.monthly.previous}hrs`;
  }
});
