import { useState } from 'react'
import './App.css'

const cardImages = [
  {"src": "/img/Bulbasaur.png"},
  {"src": "/img/Charmander.png"},
  {"src": "/img/Squirtle.png"},
  {"src": "/img/Pikachu.png"},
  {"src": "/img/Dratini.png"},
  {"src": "/img/Mew.png"},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id} >
            <div>
              <img src={card.src} className="front" alt="card front" size='10%'/>
              <img src={"/img/cover.png"} className='back' alt="card back" size='10%' />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App