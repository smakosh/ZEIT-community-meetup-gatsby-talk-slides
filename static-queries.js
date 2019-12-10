export default `
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const { posts } = useStaticQuery(graphql\`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date(formatString: "D MM YYYY")
            }
            timeToRead
            description: excerpt(truncate: true, pruneLength: 40)
          }
        }
      }
    }
  \`)

  return (
    <div>
      {posts.edges.map(({ node: { id, frontmatter: { title, date, slug }, timeToRead, description } }) => (
        <div>
          <Link to={slug}>{title}</Link>
          <div>
          <span>Published at: {date}</span>
          <span>{timeToRead}</span>
          </div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}
`