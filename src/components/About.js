// import React, { useState } from "react";

export default function About(props) {


    // const [mystyle, setMystyle] = useState( {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    
    // const [btntext, setBtntext] = useState("Enable Dark mode")

    // const toggleStyle = () => {
    //     if(mystyle.color === 'black'){
    //         setMystyle( {
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtntext("Enable Light mode")
    //     }

    //     else{
    //         setMystyle( {
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntext("Enable Dark mode")
    //     }
    // }

    let mystyle = {
      color: props.mode === "dark"? "white" : "#042743",
      backgroundColor: props.mode === "dark"? "rgb(36 74 104)" :"white"
    }

  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.mode === "dark"? "white" : "#042743"}}>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={mystyle}>
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Textutilis gives you a way to analyze your text efficiently and clearly.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={mystyle}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Textutilis is a free character count tool that provides instant character count and word count statistics for a given text. it reports the number of words and characters.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={mystyle}>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             This word counter software works in any web browsers such as Chorme, Firefox, Internet Explorer, Safari, Opera. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
