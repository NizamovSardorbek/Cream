import React, { Component } from "react";
import {
  Beauty1,
  CreamWrapper,
  IconContain,
  IconsWrap,
  IconWrapper,
} from "./IconsStyle";
import Vectors1 from "./assets/vector1.png";
import Vectors2 from "./assets/vector2.svg";
import Vectors3 from "./assets/vector3.svg";
import Vectors4 from "./assets/vector4.svg";
export default class Icons extends Component {
  render() {
    return (
      <IconsWrap>
        <IconWrapper>
          <h3>Why brand name?</h3>
          <h1>Sed ut perspiciatis unde omy</h1>
          <h2>At vero eos et accusamus et iusto odio dignissimos</h2>
          <CreamWrapper>
            <IconContain>
              <Beauty1 src={Vectors1} alt="" />
              <h3>Lorem Ipsum</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </IconContain>
            <IconContain>
              <Beauty1 src={Vectors2} alt="" />
              <h3>Sed ut perspiciatis </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla
              </p>
            </IconContain>{" "}
            <IconContain>
              <Beauty1 src={Vectors3} alt="" />
              <h3>Ut enim ad minim</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
              </p>
            </IconContain>
            <IconContain>
              <Beauty1 src={Vectors4} alt="" />
              <h3>At vero eos eaccu</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </IconContain>
          </CreamWrapper>
        </IconWrapper>
      </IconsWrap>
    );
  }
}
