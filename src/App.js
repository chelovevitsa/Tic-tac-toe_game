import './App.scss';
import Field from './component/Field';
import React, {useState} from 'react';


function App() {
  // 1 = 'X'
  // 0 = '0'
  const[player, setPlayer] = useState(1);
  const [win, setWin] = useState(false);
  const[tab, setTab] = useState([null,null,null,null,null,null,null,null,null]);
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const post = (index) => {
    if (tab[index] == null){
      if (win) return;
      tab[index] = player;
      setTab(tab);
      setPlayer(player === 1 ? 0 : 1)
      winner.map(paste => {
        if (tab[paste[0]] === tab[paste[1]] && tab[paste[1]] === tab[paste[2]] && tab[paste[0]] != null) {
            // kod, kiedy ktoś wygra
            console.log('win')
            setWin(true)
        };
    })
    }
    
  }
  return (
    <div className="App">
        <div className='game'>
          {tab.map((value, index) => <div key={index} onClick={() => post(index)}><Field value={value} win={win}/></div>)}
        </div>
    </div>
  );}

export default App;
