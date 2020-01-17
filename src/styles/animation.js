import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease-in' } = {}) =>
  css`
    animation: ${time} ${FadeInKeyFrames} ${type};
  `

export const FadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
