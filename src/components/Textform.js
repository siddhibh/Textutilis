import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [bg, setBg] = useState(" ");

  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert into uppercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert into lowercase", "success");
  };

  const handleclearclick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("All text clear", "success");
  };

  const handledarkclick = () => {
    let newbg = document.querySelector("textarea");
    let darkbg = (newbg.style.backgroundColor = "black");
    setBg(darkbg);
    props.showAlert("Dark mode On", "success");
  };
  const handlelightclick = () => {
    let newbg = document.querySelector("textarea");
    let lightbg = (newbg.style.backgroundColor = "white");
    setBg(lightbg);
    props.showAlert("Light mode On", "success");
  };
  const handlecopyclick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copy to clipboard", "success");
  };
  const handlespaceclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3`}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handleupclick}
        >
          {" "}
          convert to uppercase
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3`}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handleLoclick}
        >
          {" "}
          convert to lowercase
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3 `}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handleclearclick}
        >
          Clear text
        </button>
        <button
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3`}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handledarkclick}
          value={bg}
        >
          dark mode
        </button>
        <button
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3`}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handlelightclick}
          value={bg}
        >
          light mode
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3`}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handlecopyclick}
        >
          Copy text
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.btngreen} mx-1 my-1 border border-3`}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onClick={handlespaceclick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
