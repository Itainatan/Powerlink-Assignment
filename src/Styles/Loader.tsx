// Imports
import styled from "styled-components";


// Consts
export const Loader = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid blue;
border-bottom: 16px solid blue;
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite;
animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
