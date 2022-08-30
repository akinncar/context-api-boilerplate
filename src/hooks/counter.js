import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter need a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounter };
