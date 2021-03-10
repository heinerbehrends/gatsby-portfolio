// @ts-nocheck
const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = `books/${slugify(node.frontmatter.title, { lower: true })}`
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
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              description
              title
              image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(height: 332)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const nodes = result.data.allMarkdownRemark.edges

  nodes.forEach(({ node }) => {
    createPage({
      path: `books/${slugify(node.frontmatter.title, { lower: true })}`,
      component: path.resolve(`./src/templates/bookCover.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
