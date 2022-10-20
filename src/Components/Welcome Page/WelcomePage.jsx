import React from "react";
import "./WelcomePage.css";
import logo from "../../netflix.svg";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

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
        style={{ width: "100%", paddingTop: "40px", height: "440px" }}
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
              <p>Downloading...</p>
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

      <div className="Banner2">
        <div className="Banner_text" style={{ width: "80%" }}>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="Banner_media4">
          <video autoPlay playsInline loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
          />
        </div>
      </div>

      <div
        className="Banner2"
        style={{
          width: "100%",
          paddingTop: "40px",
          height: "440px",
          justifyContent: "centre",
          alignItems: "center",
        }}
      >
        <div className="Banner_media3">
          <img
            style={{ paddingLeft: "50px" }}
            src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
            alt=""
          />
        </div>
        <div
          className="Banner_text"
          style={{ width: "50%", paddingRight: "110px", marginTop: "-70px" }}
        >
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="FAQ">
        <h1>Frequently Asked Questions</h1>

        <div className="FAQ__Accordion">
          <Accordion
            sx={{
              backgroundColor: "#303030",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <AccordionSummary
              sx={{ marginBottom: "10px" }}
              expandIcon={<AddIcon sx={{ fontSize: "45px", color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "25px" }}>
                What is Netflix?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "25px", color: "white", lineHeight: "2rem" }}
              >
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </Typography>
            </AccordionDetails>
          </Accordion>

         
          <Accordion
            sx={{
              backgroundColor: "#303030",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <AccordionSummary
              sx={{ marginBottom: "10px" }}
              expandIcon={<AddIcon sx={{ fontSize: "45px", color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "25px" }}>
                How much does Netflix cost?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "25px", color: "white", lineHeight: "2rem" }}
              >
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#303030",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <AccordionSummary
              sx={{ marginBottom: "10px" }}
              expandIcon={<AddIcon sx={{ fontSize: "45px", color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "25px" }}>
                Where can I watch?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "25px", color: "white", lineHeight: "2rem" }}
              >
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br />
                <br />
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#303030",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <AccordionSummary
              sx={{ marginBottom: "10px" }}
              expandIcon={<AddIcon sx={{ fontSize: "45px", color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "25px" }}>
                How do I cancel?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "25px", color: "white", lineHeight: "2rem" }}
              >
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#303030",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <AccordionSummary
              sx={{ marginBottom: "10px" }}
              expandIcon={<AddIcon sx={{ fontSize: "45px", color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "25px" }}>
                What can I watch on Netflix?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "25px", color: "white", lineHeight: "2rem" }}
              >
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#303030",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <AccordionSummary
              sx={{ marginBottom: "10px" }}
              expandIcon={<AddIcon sx={{ fontSize: "45px", color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "25px" }}>
                Is Netflix good for kids?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: "25px", color: "white", lineHeight: "2rem" }}
              >
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space. <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

          <div className="enterEmail">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="EmailInput">
          <TextField
            sx={{ backgroundColor: "white", width: "100%" }}
            id="filled-basic"
            label="Email address"
            variant="filled"
            color="secondary"
          />
          <button className="Started__Button" style={{width:"50%"}}>
            Get Started <ArrowForwardIosIcon sx={{ width: "0px" }} />
          </button>
        </div>
          </div>

      </div>
    </div>
  );
};
