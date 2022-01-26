/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { disconnect } from 'process';
import BackgroundPicture from './images/backgroundTopSection.png';
import logoIcon from './images/logo.svg';

const divContainerHeroStyle = css`
  position: relative;
  z-index: 0;
  display: flex;
  width: 1200px;
  height: 100%;
  margin-left: 0;
  padding-top: 0;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  /* z-index: 99999; */
  /* max-width: 1160px;
  padding: 0px 10px;
  margin: auto; */
  /* margin-right: auto;
  margin-bottom: 13px;
  margin-left: auto; */

  /* line-height: 24px; */
  /* text-align: left; */
  /* box-sizing: border-box; */
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`;
// const logoStyle = css`
//   display: flex;
//   align-items: center;
//   /* position: absolute; */
//   top: 7px;
//   font-family: 'DM sans', sans-serif;
//   left: 9px;
//   /* margin-bottom: 0;
//   margin-top: 0; */
//   margin-left: 0;
//   color: white;
//   font-size: 16px;
//   line-height: 20px;
//   font-weight: 300;
//   text-align: center;
//   letter-spacing: 1.2px;
//   box-sizing: border-box;
//   margin-block-start: 0.67em;
//   margin-block-end: 0.67em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;

//   cursor: pointer;
// `;

const iconStyle = css`
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  /* margin-top: 0px;
  margin-left: 0; */
  color: #fff;
`;

// const menuStyle = css`
//   position: relative;
//   top: -1px;
//   display: block;
//   margin-left: 0;
//   font-family: 'DM Sans', sans-serif;
//   font-size: 14px;
//   font-weight: 400;
//   letter-spacing: 0.2px;
//   text-decoration: none;
//   box-sizing: border-box;
//   -webkit-box-direction: normal;
//   line-height: 24px;
//   text-align: left;
//   gap: 20px;
// `;

const buttonDemoStyle = css`
  padding: 13px 10px 0 15px;
  border: 1px #fc687b;
  border-radius: 45px;
  background-color: #fd576c;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  -webkit-transition: box-shadow 0.2s, background-color 0.2s;
  transition: box-shadow 0.2s, background-color 0.2s;
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
`;

const bodyStyle = css`
  background-color: #0f123d;
  margin: 0;
  min-height: 100%;
  color: #333;
  line-height: 20px;
  box-sizing: border-box;
  display: block;
  -webkit-text-size-adjust: 100%;
  @media screen and (min-width: 1440px) {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
  }
`;

// const backgroundPictureStyle = css`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;
// `;

const heroTextStyle = css`
  position: relative;
  top: -5px;
  display: flex;
  margin-left: 0;
  padding-top: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;

const heroFirstHeadingStyle = css`
  width: 800px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Avenirnextltpro demi';
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 7px rgb(0 0 0 / 10%);
  margin: 0.67em 0;
  @media screen and (min-width: 1440px) {
    font-size: 2.8em;
    line-height: 1.1em;
    text-transform: capitalize;
  }
`;

const heroFirstHeadingTextStyle = css`
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 44px;

  font-weight: 700;
  text-transform: capitalize;
  @media screen and (min-width: 1440px) {
    line-height: 46px;
  }
`;

// const heroTextStyle = css`
//   font-family: 'DM Sans', sans-serif;
//   color: #fff;
//   font-size: 44px;
//   line-height: 56px;
//   font-weight: 700;
//   text-transform: capitalize;
//   box-sizing: border-box;
//   text-align: center;
//   letter-spacing: 0.5px;
//   -webkit-box-direction: normal;
//   -webkit-text-size-adjust: 100%;
// `;

const heroSecondHeadingStyle = css`
  margin-top: 10px;
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  text-shadow: 1px 0 6px #000;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media screen and (min-width: 1440px) {
    width: 600px;
    margin-bottom: 30px;
    letter-spacing: 0.5px;
  }
`;

const buttonPriceStyle = css`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 279px;
  height: 58px;
  border-radius: 45px;
  background-color: #fd435a;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
  font-size: 15px;
  font-weight: 700;
  border-color: #fd435a;
  position: static;
  padding-left: 15px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 3px #fc687b;
  background-image: none;
  color: #fff;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    margin-right: 0;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    margin-left: 30px;
    padding-top: 9px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
  }
`;

const companyLogoStyle = css`
  width: 100%;
  height: auto;
  margin-top: 70px px;
  margin-bottom: 20px;
  padding-top: 0;
  padding-bottom: 40px;
  box-sizing: border-box;
`;
const bodyDivStyle = css`
  object-fit: fill;
  @media screen and (min-width: 1440px) {
    overflow: hidden;
  }
`;

const heroSectionStyle = css`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 105vh;
  padding-top: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background-image: url(${BackgroundPicture});
  @media screen and (min-width: 1440px) {
    margin-top: -8px;
    background-position: 50% 50%;
    background-size: cover;
  }
`;

const navWrapperHomeStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 99999;
  @media screen and (min-width: 1440px) {
    background-color: hsla(0, 0%, 100%, 0);
  }
`;

const navigationHomeStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 99999;
  display: block;
  @media screen and (min-width: 1440px) {
    background-color: hsla(0, 0%, 100%, 0);
  }
`;
const navigationBarStyle = css`
  position: relative;
  z-index: 99999;
  display: flex;
  width: 100vw;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  border: 1px #000;
  border-radius: 0;
  opacity: 1;
  color: #000;
  top: 0;
  right: 0;
  bottom: auto;
  align-items: center;
  background: #ddd;
  @media screen and (min-width: 1440px) {
    height: 80px;
    background-color: hsla(0, 0%, 100%, 0);
  }
`;

const navigationBarDivStyle = css`
  padding-bottom: 4px;
  position: relative;
  top: 0;
  z-index: 99999;
  margin-right: auto;
  margin-left: auto;
  padding: 4px 0 0;
  line-height: 24px;
  text-align: left;
  box-sizing: border-box;
  @media screen and (min-width: 1440px) {
    height: auto;
    margin-bottom: 10px;
    padding-top: 15px;
    background-color: transparent;
    width: 90%;
  }
`;

const navigationLogoStyle = css`
  position: relative;
  float: left;
  text-decoration: none;
  color: #333;
  background-color: transparent;
  @media screen and (min-width: 1440px) {
    top: 1px;
  }
`;

const logoDivStyle = css`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const logoStyle = css`
  display: block;
  height: auto;
  margin-left: 0;
  color: #fff;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  @media screen and (min-width: 1440px) {
    width: 35px;
    margin-top: 10px;
  }
`;

const logoTextStyle = css`
  top: 7px;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  left: 9px;
  margin-bottom: 0;
  color: #fff;
  line-height: 20px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.2px;
  margin-top: 0;
  margin: 0.67em 0;
  @media screen and (min-width: 1440px) {
    font-size: 15px;
  }
`;

const companyContainerStyle = css``;

const companyBlockStyle = css``;

function App() {
  return (
    <body css={bodyStyle}>
      <div css={navigationHomeStyle}>
        <div css={navigationBarStyle}>
          <div css={navigationBarDivStyle}>
            <div css={navigationLogoStyle}>
              <div css={logoDivStyle}>
                <img src={logoIcon} css={logoStyle} alt="logo" />
                <h1 css={logoTextStyle}>
                  pixeltrue
                  <br />
                </h1>
              </div>
              <nav>
                <div></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div css={bodyDivStyle}>
        <div css={navWrapperHomeStyle}></div>
        <section css={heroSectionStyle}>
          <div css={divContainerHeroStyle}>
            <div css={heroTextStyle}>
              <h1 css={heroFirstHeadingStyle}>
                <strong css={heroFirstHeadingTextStyle}>
                  Get A Superhero Design Team
                  <br />
                  To Grow Your Business
                </strong>
                <br />
              </h1>
              <h2 css={heroSecondHeadingStyle}>
                We provide an experienced design team that works with you
                everyday to create high-quality design to help grow your
                business. Zero headaches, fixed pricing and no contracts.
                <br />
              </h2>
              <button css={buttonPriceStyle}>see our pricing</button>
            </div>
          </div>
        </section>
        <section css={companyLogoStyle}>
          <div css={companyContainerStyle}>
            <div css={companyBlockStyle}></div>
          </div>
        </section>
      </div>
    </body>
  );
}
export default App;

// function App() {
//   return (
//     <div css={background}>
//       <section>
//         <img
//           css={backgroundPictureStyle}
//           src={BackgroundPicture}
//           alt="not loading"
//         />
//         <nav css={navigationStyle}>
//           <div css={logoStyle}>
//             <LogoIcon css={iconStyle} />
//             pixeltrue
//           </div>
//           {/* <div css={menuStyle}>
//             <a>Case Studies</a>
//             <a>Pricing</a>
//             <a>Our Work</a>
//             <a>Our Platform</a>
//             <a>More</a>
//             <a>Login</a>
//           </div> */}
//           <div>
//             <button css={buttonDemoStyle}>Schedule Demo</button>
//           </div>
//         </nav>
//         <div css={heroPositionStyle}>
//           <h1 css={heroStyle}>
//             <strong css={heroTextStyle}>
//               Get A Superhero Design Team To Grow Your Business
//             </strong>
//           </h1>
//           <h2 css={introTextStyle}>
//             We provide an experienced design team that works with you everyday
//             to create high-quality design to help grow your business. Zero
//             headaches, fixed pricing and no contracts.
//           </h2>
//           <button css={buttonPriceStyle}>see our pricing</button>
//         </div>
//       </section>
//       <section css={companyLogoStyle}>
//         <div css={companyContainerStyle}>
//           <div css={companyBlockStyle}></div>
//         </div>
//       </section>
//     </div>
//   );
// }
