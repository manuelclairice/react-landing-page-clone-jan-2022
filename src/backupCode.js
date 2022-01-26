// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// // import { disconnect } from 'process';
// // import BackgroundPicture from './images/backgroundTopSection.png';
// import { ReactComponent as LogoIcon } from './images/logo.svg';

// @media only screen and (min-width: 800px) {
//   .mainHeaderStyle {
//     padding: 0 2.5rem;
//     min-height: 80px;}}

// @media only screen and (max-width: 800px) {
//   .navigationStyle {
//     visibility: hidden;
//     opacity: 0;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     z-index: 20;
//     background: white;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-flex-flow: column nowrap;
//     -ms-flex-flow: column nowrap;
//     flex-flow: column nowrap;
//     -webkit-align-items: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     -webkit-transition: opacity 200ms, visibility 0ms linear 200ms;
//     transition: opacity 200ms, visibility 0ms linear 200ms;}}

// @media only screen and (min-width: 800px) {
//   .gSdJxl {
//     height: 24px;
//     width: 1px;
//     margin: 0 4px;
//   }}

// @media only screen and (min-width: 800px) {
//   .gSdJxl {
//     height: 24px;
//     width: 1px;
//     margin: 0 4px;
//   }

// const heroStyle = css`
//   height: 100vh;
//   -webkit-flex-direction: column;
//   -ms-flex-direction: column;
//   flex-direction: column;
// `;

// const mainStyle = css`
//   margin: 0 auto;
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-flex-direction: column;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   height: 100%;
//   overflow: auto;
// `;

// const mainHeaderStyle = css`
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: justify;
//   -webkit-justify-content: space-between;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
//   clear: both;
//   z-index: 10;
//   width: 100%;
//   min-height: 60px;
//   padding: 0 1.5rem;
//   margin: 0 auto;
//   background-color: white;
//   color: rgb(0, 72, 99);
//   box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.08);
//   position: relative;
// `;

// const headerAnchorStyle = css`
//   height: 32px;
//   .headerAnchorStyle:hover {
//     opacity: 0.9;
//   }
//   .headerAnchorStyle:active {
//     opacity: 0.8;
//   }

//   /* .headerAnchorStyle:hover {
// 				opacity: 0.9;
// 			}
// 	.headerAnchorStyle:active {
// 				opacity: 0.8; */
// `;

// const headerLogoStyle = css`
//   height: 100%;
//   padding: 0;
// `;

// const navigationStyle = css`
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   color: rgb(0, 72, 99);
//   -webkit-flex-direction: row;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// `;

// const navigationButtonStyle = css`
//   position: fixed;
//   top: 28px;
//   right: 20px;

//   .navigationButtonStyle:active {
//     outline: none;
//   }
//   .navigationButtonStyle svg {
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
//   }
// `;

// const navButtonSvgStyle = css`
//   fill: rgb(73, 186, 216);
//   -webkit-transform: rotate(0);
//   -ms-transform: rotate(0);
//   transform: rotate(0);
//   -webkit-transition: width 200ms;
//   transition: width 200ms;
//   width: 24px;
//   height: 24px;
// `;

// const navigationAboutStyle = css`
//   position: relative;
//   margin: 1em;
//   color: inherit;
//   text-decoration: none;

//   .navigationAboutStyle::after {
//     position: absolute;
//     display: block;
//     bottom: -3px;
//     max-width: 0;
//     width: 100%;
//     height: 3px;
//     content: '';
//     -webkit-transition: max-width 300ms ease;
//     transition: max-width 300ms ease;
//     background-color: rgba(73, 186, 216, 0.3);
//   }
//   .navigationAboutStyle:hover::after {
//     max-width: 60px;
//   }
// `;

// const navigationBlogStyle = css`
//   position: relative;
//   margin: 1em;
//   color: inherit;
//   text-decoration: none;

//   .navigationBlogStyle::after {
//     position: absolute;
//     display: block;
//     bottom: -3px;
//     max-width: 0;
//     width: 100%;
//     height: 3px;
//     content: '';
//     -webkit-transition: max-width 300ms ease;
//     transition: max-width 300ms ease;
//     background-color: rgba(73, 186, 216, 0.3);
//   }
//   .navigationBlogStyle:hover::after {
//     max-width: 60px;
//   }
// `;

// const navigationSpanStyle = css`
//   background-color: rgb(180, 200, 207);
//   width: 24px;
//   height: 1px;
//   margin: 4px 0;
//   content: '';
// `;

// const navigationSignInStyle = css`
//   display: -webkit-inline-box;
//   display: -webkit-inline-flex;
//   display: -ms-inline-flexbox;
//   display: inline-flex;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   -webkit-justify-content: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   text-decoration: none;
//   border-radius: 5px;
//   background-color: rgb(99, 187, 126);
//   border: 1px solid none;
//   cursor: pointer;
//   font-weight: normal;
//   padding: 0.875em 2em;
//   color: white;
//   -webkit-transition: background 200ms;
//   transition: background 200ms;

//   .navigationSignInStyle:hover {
//     background: #409259;
//     color: white;
//     border: 1px solid none;
//   }
//   .navigationSignInStyle:active {
//     background: #5b9b73;
//   }
// `;

// const headerDivStyle = css`
//   display: block;
// `;

// const headerDivButton = css`
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-flex-flow: column;
//   -ms-flex-flow: column;
//   flex-flow: column;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   -webkit-justify-content: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   padding: 3px 2px;

//   .headerDivButton:focus {
//     outline: none;
//   }
//   .headerDivButton div {
//     width: 20px;
//     height: 2px;
//     background-color: rgb(0, 72, 99);
//     margin: 2px 0;
//   }
// `;

// function App() {
//   return (
//     <div>
//       <div css={heroStyle}>
//         <main css={mainStyle}>
//           <header css={mainHeaderStyle}>
//             <a css={headerAnchorStyle} href="index.html">
//               <LogoIcon css={headerLogoStyle} />
//             </a>
//             <nav css={navigationStyle}>
//               <button css={navigationButtonStyle}>
//                 {/* <svg
//                   css={navButtonSvgStyle}
//                   viewBox="-2 -2 24 24"
//                   width="24px"
//                   height="24px"
//                 >
//                   <path d="M9,11 L9,19 L11,19 L11,11 L19,11 L19,9 L11,9 L11,1 L9,1 L9,9 L1,9 L1,11 L9,11 Z"></path>
//                 </svg> */}
//               </button>
//               <a css={navigationAboutStyle} href="about.html">
//                 About
//               </a>
//               <a css={navigationBlogStyle} href="https://blog.binded.com">
//                 Blog
//               </a>
//               <span css={navigationSpanStyle}></span>
//               <a css={navigationSignInStyle} href="signup.html">
//                 Sign in
//               </a>
//             </nav>
//             <div css={headerDivStyle}>
//               <button css={headerDivButton}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//               </button>
//             </div>
//           </header>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;
