import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0px;
    border: none;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    background-color: #f5f5f5;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #000;
  }

  @keyframes AnimationName {
    0%{background-position:73% 0%}
    50%{background-position:28% 100%}
    100%{background-position:73% 0%}
  }

  ::-webkit-scrollbar-track {
    border:none;
    background:none;
    background-color: none;
  }

  ::-webkit-scrollbar {
    width:10px;
    height:10px;
    /* border:1px solid red; */
    border-radius:5px;
    /* background-color: #edf3f7; */
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 6px;
    /* border:1px solid red; */
    border-radius: 3px;
    background-color: #EDEBE9;
    border:1px solid #ccc;
  }

  ::-ms-scrollbar-track {
    border:none;
    background:none;
    background-color: none;
  }

  ::-ms-scrollbar {
    width: 0px;
    border:none;
    background:none;
    background-color: none;
  }

  ::-ms-scrollbar-thumb {
    border:none;
    background:none;
    background-color: none;
}

`
