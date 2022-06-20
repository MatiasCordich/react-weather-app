import Forecast from "./components/Forecast/Forecast";
import Inputs from "./components/Inputs/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import TopButtons from "./components/TopButtons/TopButtons";
import Footer from "./components/Footer/Footer";
import { Wrapper } from "./WrapperElement";
import getFormattedData from "./server/weatherCall";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log(data)
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {

    const styleBlue = 'linear-gradient(0deg, rgba(0,57,161,1) 23%, rgba(3,50,106,1) 100%)'
    

    const styleOrange ='linear-gradient(0deg, rgba(164,64,1,1) 20%, rgba(255,122,50,1) 100%)'
    
    if(!weather) return styleBlue

    const threshold = units === 'metric' ? 20 : 60

    if(weather.temp >= threshold) return styleOrange

    return styleBlue
  }

  return (
    <>
      {" "}
      <Wrapper style={{background:formatBackground()}}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </>
        )}
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
