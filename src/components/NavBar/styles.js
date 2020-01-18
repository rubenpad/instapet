import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
`

export const Link = styled(LinkRouter)`
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: rgb(101, 119, 134);
  transition: 0.5s all ease;

  &[aria-current] {
    color: #000;

    &:after {
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
