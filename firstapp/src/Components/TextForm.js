import React, { useState } from 'react'


export default function TextForm() {

    //use casedeclaration
    const [text, setText] = useState('');



    //function for uppercase button
    const uppercaseClick = () => {
        // console.log("sucess");
        let newText = text.toUpperCase();
        setText(newText);

    }

    //function for lowercase button
    const lowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    //funtion to clear the text
    const clearText = () => {
        let newText = '';
        setText(newText);

    }

    //event declare
    const clickOnChange = (event) => {

        setText(event.target.value);
    }

    return (
        <>
      
            <div className="container my-5 ">
                <div className="form-group">
                    <h2>Text Analyzer</h2>
                    {/* text area JSX */}
                    <textarea className="form-control" onChange={clickOnChange} value={text} id="textBox" rows={6} placeholder="Enter Your Text" />
                </div>
                {/* buttons JSX */}
                <button className="btn btn-dark mx-2" onClick={uppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-dark mx-2" onClick={lowercaseClick}>Convert to Lowercase</button>
                <button className="btn btn-dark mx-2" onClick={clearText}>Clear Text</button>
            </div>

            {/* text summery */}
            <div className="container" >
                <h4>Text Summery</h4>
                <p>Total Words : {text.split(" ").length - 1}</p>
                <p>Total Characters : {text.length} </p>
            </div>

        </>


    )
}