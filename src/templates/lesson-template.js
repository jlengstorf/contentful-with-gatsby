import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    lesson: contentfulLesson(slug: { eq: $slug }) {
      title
      video
      description {
        json
      }
      author {
        name
        twitter
      }
      seo {
        title
        description {
          description
        }
      }
    }
  }
`

const LessonTemplate = ({ data: { lesson } }) => (
  <div>
    <h1>{lesson.title}</h1>
    <p>
      Guest: {lesson.author.name} · <a href={lesson.author.twitter}>Twitter</a>
    </p>
    <div>
      {documentToReactComponents(lesson.description.json, {
        renderNode: {
          [BLOCKS.HEADING_2]: (_node, children) => (
            <h2 style={{ color: "red" }}>{children}</h2>
          ),
          [BLOCKS.EMBEDDED_ASSET]: node => (
            <img
              src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
              alt={node.data.target.fields.title["en-US"]}
            />
          ),
        },
      })}
    </div>
  </div>
)

export default LessonTemplate
