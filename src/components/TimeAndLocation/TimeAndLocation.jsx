import { formatToLocalTime } from '../../server/weatherCall';
import { LocationText, TimeAndLocationBox, TimeText } from './TimeLocationElements';


const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
    <TimeAndLocationBox>
        <TimeText>
            {formatToLocalTime(dt,timezone)}
        </TimeText>
        <LocationText>
            {`${name}, ${country}`}
        </LocationText>
    </TimeAndLocationBox>
  )
}

export default TimeAndLocation