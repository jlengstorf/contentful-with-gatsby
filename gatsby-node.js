exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulLesson {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading lessons", JSON.stringify(result.errors))
  }

  result.data.allContentfulLesson.nodes.forEach(lesson => {
    actions.createPage({
      path: `/${lesson.slug}/`,
      component: require.resolve("./src/templates/lesson-template.js"),
      context: {
        slug: lesson.slug,
      },
    })
  })
}
