import { useState } from "react";

function App() {
  const [szoveg, setSzoveg] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const addItem = () => {
    if (szoveg) {
      setItems( [...items, szoveg] );
      setSzoveg("")
    }
  }

  return (
    <>
      <ButtonValueChange />
      <ButtonValueChange />
      <input
        type="text"
        placeholder="Írd ide a neved"
        value={szoveg}
        onChange={(e) => setSzoveg(e.target.value)}
      />
      <p>Név: {szoveg}</p>
      <button onClick={ addItem }>Felvesz</button>
      <ul>
        {
          items.map( (item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;

function ButtonValueChange() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Növelés</button>
    </>
  );
}
