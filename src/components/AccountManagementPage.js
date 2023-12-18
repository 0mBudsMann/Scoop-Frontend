import React from "react";
import TextField from "@mui/material/TextField";

import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import "./font.css";

const font = "FF_MARK_FONT";

const account = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#0D0D0D",
  height: "100vh",
  color: "white",
};

// #0D0D0D
// #312F2F

const left = {
  padding: "2rem",
  flex: 1,
};

const right = {
  width: "100%",
  flex: 4,
};

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  margin: "3rem 1rem 2rem 1rem",
};
const innerLeft = {
  display: "flex",
  flexDirection: "column",
  background: "#211E1E",
  flex: 1,
  borderRadius: "2px",
  padding: "2rem 1rem 2rem 3rem",
};

const innerRight = {
  background: "#282627",
  flex: 2,
  display: "flex",
  flexDirection: "row",
  borderRadius: "2px",
  padding: "5rem 1rem 2rem 5rem",
  gap: "1rem",
};

const H1 = {
  color: "#EBEAEA",
  fontFamily: font,
};

const H2 = {
  color: "#EBEAEA",
  fontFamily: font,
};

const H3 = {
  color: "#EBEAEA",
  fontFamily: font,
};

const AccountManagementPage = () => {
  return (
    <div id="accountManagementPage" style={account}>
      <div style={left}>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <h1 style={H1}>
            Account <br />
            Management
          </h1>
        </div>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: font,
              color: "#EBEAEA",
            }}
          >
            {<FaceRetouchingNaturalIcon />}
            <span
              style={{
                padding: "1rem",
                position: "relative",
                top: "-0.2rem",
              }}
            >
              Account Details
            </span>
          </h3>
          <h3 style={H3}>
            {<AssignmentIndIcon />}
            <span
              style={{
                padding: "1rem",
                position: "relative",
                top: "-0.2rem",
              }}
            >
              Account Activity
            </span>
          </h3>
        </div>
      </div>
      <div style={right}>
        <section id="section1">
          <div style={container}>
            <div
              style={{
                display: "flex",
                fiexDirection: "row",
                width: "95%",
                height: "40vh",
              }}
            >
              <div style={innerLeft}>
                <h1 style={H1}>Account Details</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </p>
              </div>

              <div style={innerRight}>
                <TextField
                  label="NAME"
                  InputProps={{
                    style: {
                      fontFamily: font,
                      background: "#333131",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "#999999",
                      fontFamily: font,
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    },
                  }}
                />
                <TextField
                  label="USERNAME"
                  InputProps={{
                    style: {
                      fontFamily: font,
                      background: "#333131",
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "#999999",
                      fontFamily: font,
                      fontWeight: "bold",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    },
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fiexDirection: "row",
                width: "95%",
                height: "45vh",
              }}
            >
              <div style={innerLeft}>
                <h1 style={H1}>Personal Information</h1>
                <p>
                  This Information is private and will not be shared with others
                </p>
              </div>
              <div style={innerRight}>
                <TextField
                  id="filled-basic"
                  label="EMAIL ADDRESS"
                  variant="filled"
                  style={{
                    width: "500px", 
                  }}
                  InputProps={{
                    style: {
                      color: "whited",
                      fontFamily: font,
                      background: "#452647",
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "#CF51DA",
                      fontFamily: font,
                      fontWeight: "bold",
                      borderRadius: "8px",
                      fontSize: "14px",
                      
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="section2"></section>
      </div>
    </div>
  );
};

export default AccountManagementPage;
