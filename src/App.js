import "./App.css";
import { useState } from "react";
import CitySelector from "./components/citySelector";
import CityCard from "./components/cityCard";

function App() {
  const [currentCity, setCurrentCity] = useState("");

  function updateCity(newCity) {
    console.log(currentCity);
    setCurrentCity(newCity);
  }

  return (
    <div className="main_container">
      <CitySelector updateCity={updateCity} />
      {currentCity ? <CityCard city={currentCity} /> : <p>Город не выбран</p>}
    </div>
  );
}

export default App;
