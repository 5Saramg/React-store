import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationBarStyle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 3rem;
  flex-direction: column;
`

export const NavigationBarLogoStyle = styled.img`
  border: 0.5px solid #131312;
  width: 70px;
  border-radius: 50%;
`

export const NavigationBarMenuStyle = styled.div`
  align-items: center;
    display: inline-block;
    position: relative;
`

export const NavigationBarLinksStyle = styled(Link)`
  color: black;
  text-decoration: none;
  padding-right: 1rem;
`

export const NavigationBarMenuCartStyle = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
`

export const NavigationSVGtStyle = styled.svg`
  height: 2rem;
  width: 2rem;
`