import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(false);

  function onSubmitHandler() {
    setValue((prev) => !prev);
  }

  return (
    <div className="container">
      <div className="inner-container">
        <button onClick={onSubmitHandler}>Show / Hide</button>
      </div>

      {value && <h1>Welcome to React challenges!</h1>}
    </div>
  );
}

export default App;
