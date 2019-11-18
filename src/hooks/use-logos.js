import { useStaticQuery, graphql } from "gatsby"

const useLogos = () => {
  const {
    instagram,
    facebook,
    yelp,
    menu,
    logo,
    expand,
  } = useStaticQuery(graphql`
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

      logo: file(relativePath: { eq: "logos/ruse_circle_logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      expand: file(relativePath: { eq: "logos/expand.png" }) {
        sharp: childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return { instagram, facebook, yelp, menu, logo, expand }
}

export default useLogos
