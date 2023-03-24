(() => {
  const e = document.querySelector(".search input");
  document.querySelector(".btn").addEventListener("click", () => {
    e.value &&
      (async function (e) {
        const t = await fetch(
          "https://api.openweathermap.org/data/2.5/weather/?units=metric&q=" +
            e +
            "&appid=aaebd4178fcf227a3349fb75ef211df7"
        );
        var n = await t.json();
          (document.querySelector(".city").innerHTML = n.name),
          (document.querySelector(".temp").innerHTML =
            Math.round(n.main.temp) + "°C"),
          (document.querySelector(".humidity").innerHTML =
            n.main.humidity + "%"),
          (document.querySelector(".wind").innerHTML = n.wind.speed + "km/h");
      })(e.value);
  });
})();
