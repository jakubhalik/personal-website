import React from "react";
import Introduction from "components/Introduction/Introduction";
import "./center.scss";
import About from "components/About";
import LazyLoad from 'react-lazyload';
import Touch from "components/Touch";

const Center = () => {
  return (
    <div>
      <span className="tag">&lt;body&gt;</span>
      <Introduction />
      <LazyLoad once height={566}>
        <About />
      </LazyLoad>
      <LazyLoad once height={566}>
        <Touch />
      </LazyLoad>

      <span className="tag">&lt;/body&gt;</span>
    </div>
  );
};

export default Center;
