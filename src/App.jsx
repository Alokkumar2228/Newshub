import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import React, { useState } from "react";
import News from "./component/News/News";
import LoadingBar from "react-top-loading-bar";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";

const App = () => {
  const [progress, setProgress] = useState(0);

  const [renderfooter , setRenderfooter] =useState(false);

  console.log("renderFooter:", renderfooter); // Debugging

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="general" pageSize={6} category="general" news={'Top News Headlines'} />}></Route>
        <Route exact path='/business' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="business" pageSize={6} category="business" news={'Business News'} />}></Route>
        <Route exact path='/entertainment' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="entertainment" pageSize={6} category="entertainment" news={'Entertainment News'} />}></Route>
        <Route exact path='/general' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="general" pageSize={6} category="general" news={'Top News Headlines'} />}></Route>
        <Route exact path='/sports' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="sports" pageSize={6} category="sports" news={'Sports News'} />}></Route>
        <Route exact path='/health' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="health" pageSize={6} category="health" news={'Health News'} />}></Route>
        <Route exact path='/technology' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="technology" pageSize={6} category="technology" news={'Technologies News'} />}></Route>
        <Route exact path='/science' element={<News setRenderfooter={setRenderfooter} setProgress={setProgress} key="science" pageSize={6} category="science" news={'Scientific News'} />}></Route>
      </Routes>
      {renderfooter && <Footer />}
    </div>
  );
};

export default App;

// Note:
// here we use key="" render the same component by changing porps in each component  and also exact 
// so that it matches the exact location