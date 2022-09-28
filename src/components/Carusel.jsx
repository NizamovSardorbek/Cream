import React, { Component } from "react";
import {
  BottomText,
  BottomText2,
  Container,
  Creams,
  CreamWrap,
  CreamWrapMiddle,
  Crem1,
  Icon,
  Right,
  TopCream,
} from "./CaruselStyle";
import Cream1 from "./assets/cream1.svg";
import Cream2 from "./assets/cream2.svg";
import Cream3 from "./assets/cream3.svg";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
export default class Carusel extends Component {
  render() {
    return (
      <Container>
        <CreamWrap>
          <TopCream>
            <h2>Discover our products</h2>
            <p>Shop All</p>
            <i>
              <BsArrowLeftCircle />
            </i>
            <Icon>
              <BsArrowRightCircle />
            </Icon>
          </TopCream>

          <CreamWrapMiddle>
            <div>
              <Creams>
                <div>New</div>
                <Crem1 src={Cream1} />
                <h4>+ Quick Stop</h4>
              </Creams>
              <BottomText>
                <div>Your Skin But Better CC+ Cream </div>
                <BottomText2>
                  <p>$28.00</p>
                  <del>$32.00</del>
                </BottomText2>
              </BottomText>
            </div>
            <div>
              <Creams>
                <div> Sale</div>
                <Crem1 src={Cream2} />
                <h4>+ Quick Stop</h4>
              </Creams>
              <BottomText>
                <div>Your Skin But Better CC+ Cream </div>
                <BottomText2>
                  <p>$28.00</p>
                  <del>$32.00</del>
                </BottomText2>
              </BottomText>
            </div>
            <div>
              <Creams>
                <div> Sale</div>
                <Crem1 src={Cream3} />
                <h4>+ Quick Stop</h4>
              </Creams>
              <BottomText>
                <div>Your Skin But Better CC+ Cream </div>
                <BottomText2>
                  <p>$28.00</p>
                  <del>$32.00</del>
                </BottomText2>
              </BottomText>
            </div>
              <Right>
                <p>____</p>
              </Right>
          </CreamWrapMiddle>
        </CreamWrap>
      </Container>
    );
  }
}
