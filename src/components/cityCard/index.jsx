import styles from "./styles.module.css";

function CityCard({ city }) {
  console.log(city);
  return (
    <div className={styles.container}>
      <h1>{city.name}</h1>
      <img src={city.imageUrl} alt="City" />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, ind) => (
          <li key={ind}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
