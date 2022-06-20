import { DateTime } from "luxon"

const API_KEY = 'f582c9ba788ef167475bfc2a60bdabb4'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// weather?q={city name}&appid={API key}'

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current, minutely, hourly, alerts&appid={API key}&units=metric

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
}

const formatData = (data) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
  } = data

  const { main: details, icon} = weather[0]

  return {lat, lon,temp, feels_like, temp_min, temp_max, humidity, name, dt,country, sunrise, sunset, details, icon, speed}
}

const formatForecastWeather = (data) => {
  let {timezone, daily, hourly } = data
  daily = daily.slice(1,6).map(d => {
    return {
        title: formatToLocalTime(d.dt, timezone, 'ccc'),
        temp: d.temp.day,
        icon: d.weather[0].icon
    }
    
  })
  hourly = hourly.slice(1,6).map(d => {
    return {
        title: formatToLocalTime(d.dt, timezone, 'HH:mm a'),
        temp: d.temp,
        icon: d.weather[0].icon
    }
    
  })

  return {timezone, daily, hourly}
}

const getFormattedData = async (searchParams) => {
  const formattedCurrentData = await getWeatherData
  ('weather', searchParams).then(formatData)

  const { lat, lon } = formattedCurrentData

  const formattedForecast = await getWeatherData('onecall', {
    lat, 
    lon, 
    exclude: 'current, minutely, alerts', 
    units: searchParams.units,
  }).then(formatForecastWeather)

  return {...formattedCurrentData, ...formattedForecast}
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'HH:mm") => 
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`
    


export default getFormattedData

export {formatToLocalTime, iconUrlFromCode}
