import "./App.css";
import { useCounter } from "./hooks/counter";

function App() {
  const { counter, setCounter } = useCounter(0);

  return (
    <div className="App">
      {counter}
      <button onClick={() => setCounter(counter + 1)}>adiciona</button>
    </div>
  );
}

export default App;
