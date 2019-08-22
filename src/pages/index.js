import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  {
    lessons: allContentfulLesson {
      nodes {
        title
        slug
        author {
          name
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    <h1>Learn With Jason — Recent Episodes</h1>
    {data.lessons.nodes.map(lesson => (
      <div key={`lesson-${lesson.slug}`}>
        <h2>
          <Link to={`/${lesson.slug}`}>
            {lesson.title} (with {lesson.author.name})
          </Link>
        </h2>
      </div>
    ))}
  </div>
)
