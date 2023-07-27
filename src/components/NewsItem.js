import React, { Component } from "react";
// import props from pr
import css from "../App.css";

const NewsItem = (props) => {
  let { Newstitle, description, imgurl, newsurl, publishedAt, author, source } =
     props;
  return (
    <>
      <div className="mb-3 ">
        <div className="card " style={{borderRadius:"7px"}}>
          <div
            style={{
              display: "flex",
              jusitifyContent: " flex-end",
              position: "absolute",
              bottom: "0",
              padding:"4px"
              // flexDirection:"column"
            }}
          >
            <span className="badge rounded-pill bg-danger   " style={{margin:"2px",transform: "rotate(-90deg)",
              transformOrigin:" 10% 50%",marginTop:"60px"}}>
              {source}
            </span>
          </div>
          <div className="hoverEff">
            <img src={imgurl} className="card-img-top  imgSize m-auto "style={{width:"350px"}} alt="..." />
            <div className="  cardHeight card-body rounded-3">
              <h5 className="card-title">{Newstitle}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(publishedAt).toGMTString()}
                </small>
              </p>
              <a
                href={newsurl}
                target="_blank"
                className=" btnHover btn btn-sm btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
