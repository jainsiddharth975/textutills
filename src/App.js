import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForms from './Component/TextForms';
import Alert from './Component/Alert';
// import About from './Component/AboutUs';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">

          {/* <Routes>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/' element={<TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
          </Routes> */}
          <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
