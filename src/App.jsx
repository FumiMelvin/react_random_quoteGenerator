import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  const url = "http://api.quotable.io/random";

  const fetchQuote = async () => {
    const res = await axios.get(url);
    setQuote(res.data);
    console.log(res.data.content);
    console.log(res.data.author);
  };

  return (
    <div className="App">
      <h1>Random quote generator</h1>
      <div className="card">
        <p className="quote">{quote.content}</p>
        <p className="author">{quote.author}</p>
      </div>
      <button onClick={fetchQuote}>Click To Generate Random Qoute</button>
    </div>
  );
}

export default App;
