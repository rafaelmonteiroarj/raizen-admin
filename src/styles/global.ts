import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-1: #F0F2F5;
    --background-2: #FFFFFF;
    --background-3: #0C0C0C;
    --background-4: #1a1a1a;
    --background-5: rgba(0, 0, 0, 0.04);
    --background-6:  rgba(53, 49, 49, 0.96);
    --color: #ffffff;
    --color-1: #d9d9d9;
    --color-2: #707070;
    --color-3: #5AB0F4;
    --color-4: #6E6F70;
    --color-5: #a61d19;
    --color-6: rgba(0, 0, 0, 0.85);
    --color-7: rgba(0,0,0,0.15);
    --color-8: #212529;
    --color-9: #dee2e6;
    --color-10: rgba(0, 0, 0, .125);
    --color-11: rgba(0, 0, 0, 0.54);
    --color-12: #999;
    --color-13: #1a1a1a;
    --color-14: #0C0C0C;
    --color-15: #555;
    --color-16: #7c7c7c;
    --color-17: #dfdfdf;
    --color-18: #222;
    --color-19: #212121;
    --color-20: #E0E0E0;
    --color-21: #A6A6A6;
    --color-22: #061e33;
    --color-23: #e2e6ea;
    --color-24: rgb(224, 224, 224);
    --color-25: rgba(224, 224, 224, 1);
    --color-26: #d93c1f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    box-sizing: border-box;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--color-6);

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px var(--color-6), 0 0 5px var(--color-6);
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: var(--color-6);
    border-left-color: var(--color-6);
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
  {
    filter:none; /* u need this for firefox */
    -webkit-box-shadow: 0 0 0 30px white inset;
    box-shadow: 0 0 0 100px white inset;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    from {
      transform: scale(0.2)
    }
    to {
      transform: scale(1)
    }
  }
`;

export default GlobalStyles;
