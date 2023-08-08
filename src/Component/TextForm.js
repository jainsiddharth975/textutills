
import React, { useState } from 'react'

export default function TextForms(props) {

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case!", "success");
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Box has been cleared!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("All text has been copied!", "success");
    }

    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All extra spaces are removed!", "success");

    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text are reveresed!", "success");

    }

    const handleSpeekClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Your text has been spoken!", "success");
    }

    const [text, setText] = useState('');
    const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;

    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'#042743':'White'}} >
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleTextChange} style={{backgroundColor:props.mode==='light'?'white':'#042743', 
                        color:props.mode==='light'?'#042743':'White'}} value={text} id="myBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowerCaseClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>All Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleSpeekClick}>Speak</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'#042743':'White'}}>
                <h2>Your Text Summary</h2>
                <p> {wordCount} Words and {text.length} Characters </p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter Something in the Text Box above to preview it here."}</p>
            </div>
        </>
    )
}
