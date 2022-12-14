import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Home.css";
import { MenuItem } from "@mui/material";
import Categories from "../../Category";
import {useNavigate} from "react-router-dom"
import ErrorMessage from "../ErrorMessage";

const Home = ({Fatchdata}) => {
  const [Name, Setname] = useState("");
  const [Category, Setcategory] = useState("");
  const [Label, Setlabel] = useState("");
  const [No, Setno] = useState("");
  const [Error,Seterror]=useState(false)

  const navigate= useNavigate()

  const onSubmit=()=>{
    if(!Name||!Category||!Label||!No){
      Seterror(true)
      return;
    }
    else{
      Seterror(false)
      Fatchdata(Name,Category,Label,No)
      navigate('/quiz')
    }

  }

  return (
    <div>
      
      <form className="con2">
      {Error&&<ErrorMessage>Plese fill All the Field</ErrorMessage>}
        <div className="input">
          <TextField
            label="Name"
            variant="outlined"
            className="inputfield"
            value={Name}
            onChange={(e) => Setname(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            select
            label="Caregory"
            variant="outlined"
            className="inputfield"
            value={Category}
            onChange={(e) => Setcategory(e.target.value)}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>
        </div>
        <div className="input">
          <TextField
            select
            label="Lable"
            variant="outlined"
            className="inputfield"
            value={Label}
            onChange={(e) => Setlabel(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
        </div>
        <div className="input">
          <TextField
            label="No of Questions"
            variant="outlined"
            className="inputfield"
            value={No}
            onChange={(e) => {
              Setno(e.target.value);
            }}
          />
        </div>
        <Button variant="contained" color="primary" className="btn1" onClick={onSubmit}>
          Success
        </Button>
      </form>
    </div>
  );
};

export default Home;
