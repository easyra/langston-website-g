import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const NavBar = () => {
  const { instagram, bandcamp } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagram
          bandcamp
        }
      }
    }
  `).site.siteMetadata
  return (
    <StyledHeader>
      <TextWrapper>
        <h1>Langston Alimayu</h1>
        {/* <h2>Abstract LA Art</h2> */}
      </TextWrapper>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="contact" className="nav-item">
          Contact
        </Link>
        <a href={instagram}>Instagram</a>
        <a href={bandcamp}>Bandcamp</a>
      </StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 15px;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  /* box-shadow: 2px 2px 2px lightgray; */
  /* border-bottom: 1px solid lightgrey; */
`

const StyledNav = styled.nav`
  max-width: 500px;
  width: 100%;
  margin: 15px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  a {
    transition: all 0.2s;
    padding: 8px;
    font-size: 18px;
    text-transform: uppercase;
  }
  a:hover {
    color: gray;
  }
`
const TextWrapper = styled.div`
  text-align: center;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    /* text-decoration: underline; */
  }
  h2 {
    font-size: 24px;
    /* margin-top: 5px; */
    text-transform: uppercase;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export default NavBar
