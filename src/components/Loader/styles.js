import styled, { keyframes } from 'styled-components'

const Bouncedelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  
  40% { 
  
    transform: scale(1.0);
  }
`

export const Spinner = styled.div`
  margin: 3px auto;
  width: 70px;
  text-align: center;
  & > div {
    width: 10px;
    height: 10px;
    background-color: #8d00ff;

    border-radius: 100%;
    display: inline-block;
    animation: ${Bouncedelay} 1.4s infinite ease-in-out both;
  }
  & .bounce1 {
    animation-delay: -0.32s;
  }

  & .bounce2 {
    animation-delay: -0.16s;
  }
`
