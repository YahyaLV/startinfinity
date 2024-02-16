import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <>
      <h1>
        One Tool to Organize <br className="d-none d-md-block" />
        All Your Work, Your Way
      </h1>
      <p>
        Work together with your team, store everything in one place,{" "}
        <br className="d-none d-md-block" />
        and organize projects the way you want.
      </p>
      <div className="buttonContainer">
        <button className="simpleButton">
          Get Started <span>&#8594;</span>
        </button>
      </div>
      <div className="bodyimg">
        <img
          src="https://startinfinity.com/img/home-v2/infinityhero.png"
          alt=""
        />
      </div>
      <div className="text-center">
        <span
          className="users-number"
          style={{
            border: "1px solid transparent",
            padding: "5px",
            backgroundColor: "lavender",
          }}
        >
          20,000+
        </span>{" "}
        companies around the world use Infinity
      </div>
      {/* <div className="companiesimg">
        <img
          src="https://startinfinity.com/img/home-v2/companies/prezi.png"
          alt="prezi"
          className="company-img"
        />
        <img
          src="https://startinfinity.com/img/home-v2/companies/slack.png"
          alt="slack"
          className="company-img"
        />
        <img
          src="https://startinfinity.com/img/home-v2/companies/ford.png"
          alt="ford"
          className="company-img"
        />
       
      </div> */}
    </>
  );
};

export default Body;
