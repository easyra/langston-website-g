import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const HomePage = ({ data }) => {
  // console.log(data.nodes)
  return (
    <Layout>
      <Head />
      <StyledH2>ABSTRACT LA ART</StyledH2>
      <ArtContainer>
        {data.allFile.nodes.map(({ childImageSharp }) => (
          <Img
            fixed={childImageSharp.fixed}
            alt="Langston Alimayu | Sweet Lang | Abstract LA Art"
          />
        ))}
      </ArtContainer>
    </Layout>
  )
}

export default HomePage

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 0 15px;
  width: max-content;
  border-bottom: 5px solid black;
  display: none;
`
const ArtContainer = styled.div`
  display: flex;
  /* max-width: 1000px; */
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  width: 100%;
  margin: 0 auto;
  .gatsby-image-wrapper {
    margin: 15px;
  }
  @media (max-width: 500px) {
    justify-content: space-between;
    .gatsby-image-wrapper {
      margin: 5px 0;
      max-width: 500px;
    }
  }
`

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "__PROGRAMMATIC__" } }) {
      nodes {
        childImageSharp {
          fixed {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`
