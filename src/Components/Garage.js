import Apple from "./Apple";
import Car from "./Car";
function Garage() {
    const isDoorOpened = true; // Replace with your logic to check if the garage door is open or closed
    //const brand = 'Ford';
    //const color = 'black';
    const carInfo = {brand: "Ferraro", color: "Red", year: 1969};
    const appleInfo = {model: "16 pro max", color:"Gold", price:150000};
    const carList =[
      {brand: "Audi", model: "R8", year: 2012,color: "Black"},
      {brand: "BMW", model: "x1", year: 2018, color: "Blue"},
      {brand: "Ford", model: "Mustang", year: 2021, color: "Red"}
    ]
    const number =[
      1,2,3,4,5,6,7,8,9,10
    ]
    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined 
    return (
      <div>
        <h1>We will see what inside on the garage!</h1>
        {/*? */}
        { showCarInfo && <Car carInfo = {carInfo}/>  }
        <Apple appleInfo = {appleInfo}/>
        {isDoorOpened?<h2>Garage is open now</h2> : <h2>Garage is close now</h2>}
        <ul>
            {carList.map((carInfo) =><li key = {carInfo.brand}><Car carInfo = {carInfo}/></li>) }
        </ul>
        <ul>
          {number.map((number) =><p key = {number}>{number}</p>) }
        </ul>
      </div>
    );
  }
  
  export default Garage;