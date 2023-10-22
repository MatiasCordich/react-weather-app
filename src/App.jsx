import Forecast from "./components/Forecast/Forecast";
import Inputs from "./components/Inputs/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import TopButtons from "./components/TopButtons/TopButtons";
import Footer from "./components/Footer/Footer";
import {
  FBox,
  WeatherBox,
  WeatherContent,
  WheaterDetails,
  Wrapper,
} from "./WrapperElement";
import getFormattedData from "./server/weatherCall";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <>
      <Wrapper>
        <WeatherBox>
          <Navbar/>
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
          {weather && (
            <>
              <WeatherContent>
                <WheaterDetails>
                  <TimeAndLocation weather={weather} />
                  <TemperatureAndDetails weather={weather} />
                </WheaterDetails>
                <FBox>
                  <Forecast title="hourly" items={weather.hourly} />
                  <Forecast title="daily" items={weather.daily} />
                </FBox>
              </WeatherContent>
            </>
          )}
        </WeatherBox>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
