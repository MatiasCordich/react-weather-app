import React from "react";
import {
  Data,
  DataBox,
  Description,
  Details,
  DetailsBox,
  DetailText,
  ForecastText,
  Img,
  OthersDetails,
  TempBoxFirst,
  TemperatureBox,
  TemperatureText,
  UpAndDown,
} from "./TemperatureDetailsElements";
import { UilTemperatureThreeQuarter, UilWind, UilTear, UilSun, UilSunset, UilTemperaturePlus, UilTemperatureMinus } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../../server/weatherCall";

const TemperatureAndDetails = ({ weather: {
  details, icon, temp, temp_max, temp_min, sunrise, sunset, speed, humidity, feels_like, timezone
} }
) => {
  return (
    <DetailsBox>
      <TemperatureBox>
        <TempBoxFirst>
          <Img src={iconUrlFromCode(icon)} alt="sunimg" />
          <TemperatureText>
            {`${temp.toFixed()}°`}
            <DetailText>{details}</DetailText>
          </TemperatureText>
        </TempBoxFirst>

        <OthersDetails>
          <Details>
            <UilTemperatureThreeQuarter />
            Real Feel:
            <Description>{`${feels_like.toFixed()}°`}</Description>
          </Details>
          <Details>
            <UilTear />
            Humidity:
            <Description>{`${humidity.toFixed()}%`}</Description>
          </Details>
          <Details>
            <UilWind />
            Wind:
            <Description>{`${speed.toFixed()} km/h`}</Description>
          </Details>
        </OthersDetails>
      </TemperatureBox>
      <UpAndDown>
        <DataBox>
          <Data>
            <UilSun />
            <ForecastText>
              Rise: <Description style={{ fontWeight: '500' }}>
                {formatToLocalTime(sunrise, timezone, 'HH:mm a')}
              </Description>
            </ForecastText>
          </Data>

          <Data>
            <UilSunset />
            <ForecastText>
              Set: <Description style={{ fontWeight: '500' }}>
                {formatToLocalTime(sunset, timezone, 'HH:mm a')}
              </Description>
            </ForecastText>
          </Data>

          <Data>
            <UilTemperaturePlus />
            <ForecastText>
              High: <Description style={{ fontWeight: '500' }}>
                {`${temp_max.toFixed()}°`}
              </Description>
            </ForecastText>
          </Data>

          <Data>
            <UilTemperatureMinus />
            <ForecastText>
              Low: <Description style={{ fontWeight: '500' }}>
                {`${temp_min.toFixed()}°`}
              </Description>
            </ForecastText>
          </Data>
        </DataBox>
      </UpAndDown>
    </DetailsBox>
  );
};

export default TemperatureAndDetails;
