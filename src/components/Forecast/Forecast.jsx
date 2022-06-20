import React from "react";
import { iconUrlFromCode } from "../../server/weatherCall";
import {
  ForecastBox,
  ForecastTitle,
  Line,
  ForecastData,
  ForecastCard,
  ForecastHour,
  ForecastImg,
  ForecastTemperature,
} from "./ForecastElements";

const Forecast = ({ title, items }) => {
  return (
    <ForecastBox>
      <ForecastTitle>{title}</ForecastTitle>
      <Line />
      <ForecastData>
        {items.map((item) => (
          <ForecastCard>
            <ForecastHour>{item.title}</ForecastHour>
            <ForecastImg
              src={iconUrlFromCode(item.icon)}
              alt="sunimg"
            />
            <ForecastTemperature>{`${item.temp.toFixed()}°`}</ForecastTemperature>
          </ForecastCard>
        ))}
      </ForecastData>
    </ForecastBox>
  );
};

export default Forecast;
