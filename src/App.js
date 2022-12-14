import React, { useState } from "react";
import Header from "./Component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Page/Home";
import Quiz from "./Component/Page/Quiz";
import Result from "./Component/Page/Result";
import axios from "axios";


const App = () => {

  const[Question,Setquestion]=useState([])
  const[Score,Setscore]=useState(0)
  const[name,Setname]=useState('')
  const[No,SetNo]=useState()

  const Fatchdata= async(Name,Category,Label,No)=>{
    Setname(Name)
    const {data}=await axios(`https://opentdb.com/api.php?amount=${No}&category=${Category}&difficulty=${Label}&type=multiple`)
    Setquestion(data.results)
    SetNo(No)
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home Fatchdata={Fatchdata}/>}/>
        <Route path="/quiz" element={<Quiz name={name} Score={Score} Question={Question} No={No} Setscore={Setscore}/>}/>
        <Route path="/result" element={<Result Score={Score}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
