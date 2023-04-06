function attachEvents() {
    const LOCATIONS_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const CURRENT_FORECAST_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_FORECAST_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    const getWeatherBtn = document.getElementById('submit');
    const userInput = document.getElementById('location');
    const divForecast = document.getElementById('forecast');
    const divCurrent = document.getElementById('current');
    const divUpcoming = document.getElementById('upcoming');
    const degreesSymbol = '&#176';
    let currentLocation = null;
    const divForecasts = document.createElement('div');
    const divForecastInfo = document.createElement('div');
    divForecasts.setAttribute('class', 'forecasts');
    divForecastInfo.setAttribute('class', 'forecast-info');
    let labels = Array.from(document.getElementsByClassName('label'));
    let firstLabel = labels[0];
    let secondLabel = labels[1];

    getWeatherBtn.addEventListener('click', loadLocationsHandler);

    function loadLocationsHandler() {

        divForecast.style.display = 'block';
        fetch(LOCATIONS_URL)
            .then((res) => res.json())
            .then((locationsArr) => {
                let userInputValue = userInput.value;
                let isFound = false;
                for (const location of locationsArr) {
                    if (location.name === userInputValue) {
                        currentLocation = location;
                        isFound = true;
                        loadCurrentLocationData();
                        loadUpcomingLocationData();
                    }
                }
                if (!isFound) {
                    firstLabel.textContent = 'Error';
                    secondLabel.textContent = 'Error';
                    divForecasts.innerHTML = '';
                    divForecastInfo.innerHTML = '';
                }
            })
            .catch((err) => {
                divForecast.innerHTML = '';
                divForecast.textContent = err.message;
            })
    }

    function loadCurrentLocationData() {
        divForecasts.innerHTML = '';
        divCurrent.appendChild(divForecasts);
        firstLabel.textContent = 'Current conditions';

        fetch(`${CURRENT_FORECAST_URL}${currentLocation.code}`)
            .then((res) => res.json())
            .then((data) => {
                const { name, forecast } = data;
                const { condition, high, low } = forecast;
                const symbol = getConditionSymbol(condition);
                let spanConditionSymbol = document.createElement('span');
                let spanCondition = document.createElement('span');
                let spanTown = document.createElement('span');
                let spanTemperature = document.createElement('span');
                let spanWeather = document.createElement('span');
                spanCondition.setAttribute('class', 'condition');
                spanConditionSymbol.setAttribute('class', 'condition symbol');
                spanConditionSymbol.innerHTML = symbol;
                divForecasts.appendChild(spanConditionSymbol);
                divForecasts.appendChild(spanCondition);
                spanTown.setAttribute('class', 'forecast-data');
                spanTown.textContent = name;
                spanTemperature.setAttribute('class', 'forecast-data');
                spanTemperature.innerHTML = `${low}${degreesSymbol}/${high}${degreesSymbol}`;
                spanWeather.setAttribute('class', 'forecast-data');
                spanWeather.textContent = condition;
                spanCondition.appendChild(spanTown);
                spanCondition.appendChild(spanTemperature);
                spanCondition.appendChild(spanWeather);
            })
            .catch((err) => {
                divForecast.innerHTML = '';
                divForecast.textContent = err.message;
            });
    }

    function loadUpcomingLocationData() {
        divForecastInfo.innerHTML = '';
        divUpcoming.appendChild(divForecastInfo);
        secondLabel.textContent = 'Three-day forecast';

        fetch(`${UPCOMING_FORECAST_URL}${currentLocation.code}`)
            .then((res) => res.json())
            .then((data) => {
                const { name, forecast } = data;
                for (const day of forecast) {
                    const { condition, high, low } = day;
                    let conditionSymbol = getConditionSymbol(condition);
                    let spanUpcoming = document.createElement('span');
                    let spanSymbol = document.createElement('span');
                    let spanTemperature = document.createElement('span');
                    let spanWeather = document.createElement('span');
                    spanUpcoming.setAttribute('class', 'upcoming');
                    divForecastInfo.appendChild(spanUpcoming);
                    spanSymbol.setAttribute('class', 'symbol');
                    spanSymbol.innerHTML = conditionSymbol;
                    spanTemperature.setAttribute('class', 'forecast-data');
                    spanTemperature.innerHTML = `${low}${degreesSymbol}/${high}${degreesSymbol}`;
                    spanWeather.setAttribute('class', 'forecast-data');
                    spanWeather.textContent = condition;
                    spanUpcoming.appendChild(spanSymbol);
                    spanUpcoming.appendChild(spanTemperature);
                    spanUpcoming.appendChild(spanWeather);
                }
            })
    }

    function getConditionSymbol(conditionWord) {
        let conditionSymbol = '';

        switch (conditionWord) {
            case 'Sunny':
                conditionSymbol = '&#x2600';
                break;
            case 'Partly sunny':
                conditionSymbol = '&#x26C5';
                break;
            case 'Overcast':
                conditionSymbol = '&#x2601';
                break;
            case 'Rain':
                conditionSymbol = '&#x2614';
                break;
        }

        return conditionSymbol;
    }


}

attachEvents();