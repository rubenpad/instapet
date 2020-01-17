import styled, { css, keyframes } from 'styled-components'

const enter = keyframes`
  from {
    display: flex;
    overflow: scroll;
    width: 100%;
  }

  to {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    position: fixed;
    top: -10px;
    right: 0;
    left: 0;

    margin: 0 auto;
    max-width: 400px;
    transform: scale(0.7);
    z-index: 1;
  }
`

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 1rem;

  ${props =>
    props.fixed &&
    css`
      animation: 0.5s ${enter} cubic-bezier(0.21, 1.13, 0.5, 0.92);
      animation-fill-mode: forwards;
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
