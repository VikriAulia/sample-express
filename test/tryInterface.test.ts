// this is exampe declaration of Interface
interface WeatherProps {
  weather: string;
  zipcode: string;
  temp?: number;
}

// this is how to use it, we use object props as parameter, and return the weather string
const weatherComponent = (props: WeatherProps): string => props.weather;

const weatherComponent2 = (props: WeatherQueryInterface): string => props.zipcode;
//this object use type declaration file 'costom.d.ts' as interface

const weatherComponent3 = (properties: WeatherDetailType): string => properties.weather;
//this object use type decrlaration file 'custom.d.ts' as type declaration