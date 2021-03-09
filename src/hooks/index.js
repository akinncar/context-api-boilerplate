import { CounterProvider } from "./counter";

const AppProvider = ({ children }) => (
  <>
    <CounterProvider>{children}</CounterProvider>
  </>
);

export default AppProvider;
