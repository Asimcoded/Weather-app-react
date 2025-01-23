import { apiKey } from "./Private/ApiKey";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?";

export default async function fetchData(city) {
  try {
    const response = await fetch(
      apiUrl + "q=" + city + "&appid=" + apiKey + "&units=metric"
    );
    console.log(apiUrl + "q=" + city + "&appid=" + apiKey + "&units=metric");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
