import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Footer = () => {
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
    <StyledFooter>
      <h4>Follow Me Here</h4>
      <div class="links">
        <a href={instagram}>{instagram}</a>
        <a href={bandcamp}>{bandcamp}</a>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 15px;
  margin: 25% 0 1rem;
  left: 0;
  bottom: 0;
  width: 100%;
  h4 {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  a {
    display: block;
    width: max-content;
    transition: all 0.2s;
    padding: 5px;
  }
  a:hover {
    color: gray;
  }
`

export default Footer
