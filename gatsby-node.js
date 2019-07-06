const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  path
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log("object")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/template/BlogPage.js`)
  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blogs/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
