import React, { PureComponent } from "react";
import { Container } from "./style.js";
export const Loader = () => (
  <>
    <Container>
      <div id="particles-background" className="vertical-centered-box"></div>
      <div id="particles-foreground" className="vertical-centered-box"></div>

      <div className="vertical-centered-box">
        <div className="content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200px"
            height="200px"
            viewBox="0 0 512 512"
            version="1.1"
          >
            <g
              id="Branding-Finals"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Brand-Logo_fundfolio_icons-Copy"
                transform="translate(-656.000000, -80.000000)"
              >
                <g
                  id="fundfolio_bg_-#170439"
                  transform="translate(656.000000, 80.000000)"
                >
                  <g
                    id="f."
                    transform="translate(188.000000, 167.000000)"
                    fillRule="nonzero"
                  >
                    <path
                      d="M49.8936676,177.430402 L49.8936676,84.0969739 L76.2057511,84.0969739 L76.2057511,53.3168008 L49.8936676,53.3168008 L49.8936676,52.0756648 C49.8936676,36.6855783 58.6643621,29.6524742 76.2057511,30.9763526 L76.2057511,30.9763526 L76.2057511,0.196179563 C56.8440293,-0.962214047 42.2813668,3.00942119 32.5177635,12.1110853 C22.7541602,21.2127493 17.8723586,34.5342759 17.8723586,52.0756648 L17.8723586,52.0756648 L17.8723586,53.3168008 L0,53.3168008 L0,84.0969739 L17.8723586,84.0969739 L17.8723586,177.430402 L49.8936676,177.430402 Z"
                      id="f"
                      fill="#fff"
                    />
                    <path
                      d="M114.566394,177.15359 C120.390393,177.15359 125.382393,175.07359 129.542393,170.913591 C133.702393,166.753591 135.782392,161.761591 135.782392,155.937591 C135.782392,150.113592 133.702393,145.121592 129.542393,140.961592 C125.382393,136.801592 120.390393,134.721593 114.566394,134.721593 C108.742394,134.721593 103.750394,136.801592 99.5903945,140.961592 C95.4303947,145.121592 93.3503948,150.113592 93.3503948,155.937591 C93.3503948,161.761591 95.4303947,166.753591 99.5903945,170.913591 C103.750394,175.07359 108.742394,177.15359 114.566394,177.15359 Z"
                      id="."
                      fill="#F55240"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
    </Container>
  </>
);
