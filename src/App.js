import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
    ).then((response) => {
      response.json().then((result) => {
        setRates(result);
      });
    });
  }, []);

  return (
    <div className='App'>
      {!rates && <div>Loading...</div>}
      {rates && (
        <>
          <Header rates={rates} />
          <Main rates={rates} />
        </>
      )}
    </div>
  );
}

export default App;
