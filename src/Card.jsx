import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
// import Tooltip from '@material-ui/core/Tooltip';

const buttonCSS = {
  backgroundColor: "orange",
  color: "aliceblue",
};

const Card = (props) => {
  let history = useHistory();
  return (
    <>
      <div className="col-sm-4 text-center card_wrapper">
        {props.tech === "home" ? (
          // eslint-disable-next-line
          <a>
            <img
              onClick={() => {
                history.push(`/${props.techName}`);
              }}
              src={props.imgSrc}
              alt={props.name}
              className="img-fluid"
            />
          </a>
        ) : (
          <a rel="noopener noreferrer" target="_blank" href={props.url}>
            <img src={props.imgSrc} alt={props.name} className="img-fluid" />
          </a>
        )}

        {props.tech === "home" ? (
          // eslint-disable-next-line
          <a>
            <div
              className="overlay"
              onClick={() => {
                history.push(`/${props.techName}`);
              }}
            >
              <div className="btn-group text-center">
                <Button
                  onClick={() => {
                    history.push(`/${props.techName}`);
                  }}
                  style={buttonCSS}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </a>
        ) : (
          <a rel="noopener noreferrer" target="_blank" href={props.url}>
            <div className="overlay">
              <div className="btn-group text-center">
                <Button style={buttonCSS}>View the Project</Button>
              </div>
            </div>
          </a>
        )}

        <div className="px-md-3">
          <h4>{props.name}</h4>
          {props.level && props.tech !== "issues" ? (
            <p>{`Level : ${props.level} ; Project : ${props.pNo} `}</p>
          ) : null}
          {props.tech === "issues" ? <p>{`${props.level}`}</p> : null}
        </div>
      </div>
    </>
  );
};

export default Card;
