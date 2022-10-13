import React from "react";
import "./WelcomePage.css";
import logo from "../../netflix.svg";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReactPlayer from "react-player";

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
          <button className="Started__Button">
            Get Started <ArrowForwardIosIcon sx={{ width: "0px" }} />{" "}
          </button>
        </div>
      </div>

      <div className="Banner2">
        <div className="Banner_text">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="Banner_media">
        <video autoPlay playsInline loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />

        </div>
      </div>
    </div>
  );
};
