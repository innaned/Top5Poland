import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [places, setPlaces] = useState(data);

  const [showText, setShowText] = useState(false);

  const removePlace=(id) => {
    let newPlaces = places.filter (place=>place.id !==id);
    setPlaces(newPlaces)
  }

  const showTextClick =(place) => {
    place.showMore = !place.showMore
    setShowText(!showText)
  }

  return (
    <div>
      <div className='container'>
        <h1>TOP {places.length} najpiękniejszych miejsc do zwiedzania w Polsce</h1>
      </div>

      {places.map((place => {
        const {id, title, description, image, showMore} = place;

        return(
          <div key ={id}>
            <div className='container'>
              <h2>{title}</h2>
            </div>

            <div className='container'>
              <p>{showMore ? description : description.substring(0, 190) + "..."}
              <button onClick={() => showTextClick(place)}>{showMore ? "mniej" : "więcej"}</button>
              </p>
            </div>

            <div className='container'>
              <img src={image} width="700px" alt='Zamek w Mosznej'/>
            </div>

            <div className='container'>
              <button onClick={() => removePlace(id)} className='btn'>Usunąć z listy</button>
            </div>
          </div>
        )
      }))}
    </div>
  );
}

export default App;
