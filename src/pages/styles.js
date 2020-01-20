import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Action = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  display: block;
  text-align: center;

  a {
    margin-left: 8px;
    text-decoration: none;
    color: #8d00ff;
    cursor: pointer;
  }
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #000;
`
