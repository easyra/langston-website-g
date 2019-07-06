import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const BlogList = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `).allMarkdownRemark.edges
  return (
    <div>
      {posts.map(({ node }) => {
        const { title, date } = node.frontmatter
        return (
          <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList
