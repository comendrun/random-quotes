import React from "react";

const Quote = (props) => {
  let rotate360 = [{ transform: "rotate(360deg)" }];

  return (
    <div style={{ rotate360 }} className="qoute-container">
      <section className="qoute-itself">
        <h1>
          <span className="qoute-sign">‟</span>
          {props.quote}
        </h1>
        <p className="author">{props.author}</p>
      </section>
      <section className="qoute-share">
        <button style={props.style} className="btn backg">
          <a href="https://github.com/comendrun" target="_blank">
            <i className="fa-brands fa-github icon fa-2xl"></i>
          </a>
        </button>
        <button style={props.style} className="btn backg">
          <a href="https://twitter.com/comendrun" target="_blank">
            <i className="fa-brands fa-twitter icon fa-2xl"></i>
          </a>
        </button>
        <button
          style={props.style}
          onClick={props.newQuote}
          className="btn push-right backg"
        >
          New Qoute
        </button>
      </section>
    </div>
  );
};

export default Quote;
