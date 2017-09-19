// &APPID=85bd2dba7eb0754f1818a8ac70c815c4
const pacheco = cityId => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=85bd2dba7eb0754f1818a8ac70c815c4&units=metric&lang=es`)
  .then(result => {
    result.json()
    .then(weatherResult => {
      console.log(weatherResult.weather[0].icon);
      console.log(weatherResult.weather[0].description);
      console.log(weatherResult.main.temp);
    });
  });
};

export default pacheco;
