export default `
  query($slug: String!) {
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
        }
        content: html
        timeToRead
    }
  }

  import React from 'react'

  export default ({
    data:
      { post:
        { frontmatter: { title, date }, content, timeToRead }
      }
    }) => (
    <div>
        <h2>{title</h2>
        <div><span>Reading time: {timeToRead} min</span></div>
        <div style={{margin: '20px 0'}}><span>Published: {date}</span></div>
        <p dangerouslySetInnerHTML={{__html: content }} />
    </div>
  )
`
