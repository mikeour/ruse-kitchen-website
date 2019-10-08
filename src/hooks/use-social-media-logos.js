import { useStaticQuery, graphql } from "gatsby"

const useSocialMediaLogos = () => {
  const { instagram, facebook, yelp, menu } = useStaticQuery(graphql`
    query {
      instagram: file(
        relativePath: { eq: "social-media-logos/instagram-logo.png" }
      ) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(
        relativePath: { eq: "social-media-logos/facebook-logo.png" }
      ) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      yelp: file(relativePath: { eq: "social-media-logos/yelp-logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      menu: file(relativePath: { eq: "logos/menu-logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return { instagram, facebook, yelp, menu }
}

export default useSocialMediaLogos
