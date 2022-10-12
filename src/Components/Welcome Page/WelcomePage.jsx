import React from "react";
import "./WelcomePage.css";
import logo from "../../netflix.svg";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const WelcomePage = () => {
  return (
    <div>
      <div className="Banner1">
        <div className="Header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="SignIn">
            <button className="SignIn__button">Sign In</button>
          </div>
        </div>

        <div className="StoryCard">
          <div className="StoryCard1">Unlimited movies, TV shows and more.</div>
          <div className="StoryCard2">Watch anywhere. Cancel anytime.</div>
          <div className="StoryCard3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
        </div>

        <div className="EmailInput">
          <TextField
            sx={{ backgroundColor: "white", width: "35%" }}
            id="filled-basic"
            label="Email address"
            variant="filled"
          />
          <button className="Started__Button">Get Started <ArrowForwardIosIcon sx={{width:"0px"}} /> </button>
        </div>
      </div>
    </div>
  );
};
