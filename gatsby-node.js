// @ts-nocheck
const slugify = require("slugify")
const path = require("path")
const { pathToFileURL } = require("url")

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
  console.log(nodes)
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
