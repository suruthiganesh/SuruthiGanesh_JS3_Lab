import { WeatherAPI } from "./static/weather-api.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("Germany");
  weatherAPI.buildURL();
}

async function testInvoke(){

  const weatherAPI = new WeatherAPI("Germany");
  weatherAPI.buildURL();

  const responseInJSON = await weatherAPI.invoke();
  console.log(responseInJSON);

}


testInvoke();