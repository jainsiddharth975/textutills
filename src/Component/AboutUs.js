import React from 'react'

function AboutUs(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        // border: '1px solid',
        // borderColor: props.mode === 'dark'?'white':'#042743',

    }

    return (
        <div className='container'>
            <div className="accordion" id="accordionExample">
                <h1  style={{color: props.mode === 'dark'?'white':'black'}}>About us</h1>  
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>    
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                            <strong>Textutils</strong> gives you a way to analyze your text quickly and effeciently. Be it word, Character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>Textutils</strong> is a free Character counter tool that provides instant Character & word count statistics for a given
                            text. Textutils reports the number of words and Characters. Thus it is suitable for writing text with word/character 
                            limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, safari, Opera. It
                            suits to count characters in facebook, blog, books, excle document, pdf document,essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
