import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const NotFound = () => {
  return (
    <Layout>
      <Error404>Sorry Page not found</Error404>
    </Layout>
  )
}
export default NotFound

const Error404 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`
