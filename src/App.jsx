import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="container">
        <h1>Penjumlahan Baris dan Kolom Matriks</h1>
        <hr />
        <form>
          {[...Array(4)].map((_, rowIndex) => (
            <div className="row mb-4" key={rowIndex}>
              {[...Array(4)].map((_, colIndex) => (
                <div className="col" key={colIndex}>
                  <input type="number" />
                </div>
              ))}
              <div className="col">
                <input readOnly />
              </div>
            </div>
          ))}
          <div className="row mb-4">
            {[...Array(4)].map((_, index) => (
              <div className="col" key={index}>
                <input readOnly />
              </div>
            ))}
            <div className="col">
              <button type="button" className="btn btn-primary">Proses</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App