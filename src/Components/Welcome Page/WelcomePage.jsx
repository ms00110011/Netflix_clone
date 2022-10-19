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
            color="secondary"
          />
          <button className="Started__Button">
            Get Started <ArrowForwardIosIcon sx={{ width: "0px" }} />
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

      <div
        className="Banner2"
        style={{ width: "100%", paddingTop: "40px", paddingBottom: "60px" }}
      >
        <div className="Banner_media3">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className="Download__Card">
            <div className="Download__Image">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
            </div>

            <div className="Download__Text">
              <h4>Stranger Things</h4>
              <p>Downloading</p>
            </div>

            <div className="Download__Image2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="Banner_text"
          style={{ width: "50%", marginRight: "40px" }}
        >
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
};
