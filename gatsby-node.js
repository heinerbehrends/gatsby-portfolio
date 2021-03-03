// @ts-nocheck
const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ContentJson") {
    const slug = `books/${slugify(node.title, { lower: true })}`
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query PagesQuery {
      allContentJson {
        edges {
          node {
            title
            description
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const nodes = result.data.allContentJson.edges

  nodes.forEach(({ node }) => {
    createPage({
      path: `books/${slugify(node.title, { lower: true })}`,
      component: path.resolve(`./src/templates/bookCover.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
