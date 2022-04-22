import "./styles.css";
import Quote from "./components/quote";
import React from "react";
import axios from "axios";

export default function App() {
  const allColors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
  ];

  const randColor = () => {
    let colorsLength = allColors.length;
    let colorNumber = Math.floor(Math.random() * colorsLength);
    return allColors[colorNumber];
  };

  const [quotes, setQuotes] = React.useState([]);
  const [quote, setQuote] = React.useState({
    quote: "",
    author: ""
  });
  const [color, setColor] = React.useState(randColor);

  let randNum = Math.floor(quotes.length * Math.random());

  React.useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((response) => {
        const ourQuotes = response.data.quotes;
        setQuotes(ourQuotes);
      });
  }, []);

  const newQuote = () => {
    randNum = Math.floor(quotes.length * Math.random());
    setQuote((preQuote) => {
      return {
        quote: quotes[randNum].quote,
        author: quotes[randNum].author
      };
    });

    setColor(randColor);
  };

  let rotate360 = [{ transform: "rotate(360deg)" }];
  let year = new Date().getFullYear();

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Quote
        quote={
          quote.quote !== ""
            ? quote.quote
            : quotes.length !== 0 && quotes[randNum].quote
        }
        author={
          quote.quote !== ""
            ? quote.author
            : quotes.length !== 0 && quotes[randNum].author
        }
        newQuote={newQuote}
        style={{ backgroundColor: color }}
      />
      <p className="kamran">Kamran {year}</p>
    </div>
  );
}
