import GlobalStyle from "./style/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`

width: 100%;
max-width: 800px;
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 10px;

`;

const Title = styled.h1`
  font-size: 10px;
`
function App() {
  return (
    <>
    
      <Title>Olá</Title>
    </>
  );
}

export default App;
