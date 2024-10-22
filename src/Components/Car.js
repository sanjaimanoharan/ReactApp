function Car(props) {
  // Destructure the carInfo object from props
  const { carInfo } = props;
  const { brand, color, year, model } = carInfo;

  // You can use the text variable to show a message
  const text = `Hi, This is a ${year} ${color} ${model} ${brand} car!`;

  return (
    <div>
      <h2>{text}</h2>
      <h1>Car</h1>
      <p>This is a Brand new {brand}</p>
      <p>Make: {color}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Car;
